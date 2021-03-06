/**
 * Copyright 2020 Open Infrastructure Foundation
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/
import { createStore, applyMiddleware, combineReducers, compose} from 'redux';
import reduceReducers from 'reduce-reducers';
import thunk from 'redux-thunk';
import {aucMetrics} from './reducers';
import { genericReducers } from "~core-utils/reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let reducer = reduceReducers(aucMetrics, genericReducers);
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;