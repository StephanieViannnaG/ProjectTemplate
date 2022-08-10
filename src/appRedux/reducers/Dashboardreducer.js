export const CreateQuickRunTaskReducer = (state = [], action) =>
  action.type === 'CreateQuickRunTask' ? action.payload : state;
export const CreateLongRunTaskReducer = (state = [], action) =>
  action.type === 'CreateLongRunTask' ? action.payload : state;
export const GetTaskStateReducer = (state = [], action) =>
  action.type === 'GetTaskState' ? action.payload : state;
export const GetSubDirectoryReducer = (state = [], action) =>
  action.type === 'GetSubDirectory' ? action.payload : state;
export const GetFileandDirReducer = (state = [], action) =>
  action.type === 'GetFileandDir' ? action.payload : state;
