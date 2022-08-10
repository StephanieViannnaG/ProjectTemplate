import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import Settings from './Settings';
import Auth from './Auth';
import Notes from './Notes';
import Contact from './Contact';
import Common from './Common';
import {
  CreateQuickRunTaskReducer,
  CreateLongRunTaskReducer,
  GetTaskStateReducer,
  GetSubDirectoryReducer,
  GetFileandDirReducer
} from './Dashboardreducer';

import { VendorSelectRed } from './VendorSelectRed';

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    settings: Settings,
    auth: Auth,
    notes: Notes,
    contact: Contact,
    common: Common,

    // dashboard
    CreateQuickRunTask: CreateQuickRunTaskReducer,
    CreateLongRunTask: CreateLongRunTaskReducer,
    GetFileandDir: GetFileandDirReducer,
    GetTaskState: GetTaskStateReducer,
    GetSubDirectory: GetSubDirectoryReducer,

    // Select vendor type
    vendor: VendorSelectRed
  });

export default createRootReducer;
