/* eslint-disable no-constant-condition */
import { isDev } from 'worona-deps';
import { takeEvery } from 'redux-saga';
import { find } from 'lodash';
import { fork, call, select, put, race, take } from 'redux-saga/effects';
import * as deps from '../deps';
import * as selectors from '../selectors';
import * as actions from '../actions';
import addSettings from './addSettings';
import saveSettings from './saveSettings';
import defaultSettings from './defaultSettings';

const env = isDev ? 'dev' : 'prod';

export function* activatePackage({ fields: { name } }) {
  const pkgs = yield select(selectors.getPackageCollection);
  const pkg = find(pkgs, pkgObj => pkgObj.name === name);
  yield put(deps.actions.packageActivationRequested({ pkg }));
}

export function* deactivatePackages() {
  let pkgs = [];
  while (true) {
    const { added, removed } = yield race({
      added: take(
        ({ type, collection, event }) =>
        type === deps.types.COLLECTION_MODIFIED && collection === 'packages' && event === 'added'
      ),
      removed: take(
        ({ type, collection, event }) =>
        type === deps.types.COLLECTION_MODIFIED && collection === 'packages' && event === 'removed'
      ),
    });
    if (added) {
      pkgs = yield select(selectors.getPackageCollection);
    } else {
      const pkg = find(pkgs, item => item.id === removed.id);
      yield put(deps.actions.packageDeactivationRequested({ pkg }));
    }
  }
}

export function* requestPackages() {
  yield [
    call(
      deps.sagaHelpers.waitForReady,
      'dashboard-settings-live',
      selectors.getSettingsLiveIsReady
    ),
    call(deps.sagaHelpers.waitForReady, 'packages', selectors.getPackageIsReady),
  ];
  const pkgs = yield select(selectors.getPackageCollection);
  yield pkgs.map(pkg => put(deps.actions.packageActivationRequested({ pkg })));

  yield takeEvery(
    ({ type, collection, event }) =>
      type === deps.types.COLLECTION_MODIFIED && collection === 'packages' && event === 'added',
    activatePackage
  );
}

export function* addDefaultSettings({ siteId }) {
  const devPkgs = yield select(selectors.getDevPackageCollection);
  yield devPkgs.map(pkg => put(actions.addSettingsRequested({ ...pkg, siteId })));
}

export default function* settingsagas() {
  yield [
    fork(defaultSettings),
    fork(deps.sagaCreators.collectionWatcherCreator('settings-live')),
    fork(deps.sagaCreators.subscriptionWatcherCreator('dashboard-settings-live')),
    fork(deps.sagaCreators.collectionWatcherCreator('packages')),
    fork(deps.sagaCreators.subscriptionWatcherCreator('packages', env)),
    fork(requestPackages),
    fork(deactivatePackages),
    fork(saveSettings),
    fork(addSettings),
    takeEvery(deps.types.CREATE_SITE_SUCCEED, addDefaultSettings),
  ];
}
