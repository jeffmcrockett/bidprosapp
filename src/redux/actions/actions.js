import * as ActionTypes from "./actionTypes";
import * as api from "../../api/api";

export const getEvents = () => {
    return function (dispatch) {
        return api
            .getEvents()
            .then((eventsFromApi) => dispatch(LOAD_EVENTS_SUCCESS(eventsFromApi)))
            .catch((error) => console.log(error));
    };
}

export const getItems = () => {
    return function (dispatch) {
        return api
            .getItems()
            .then((itemsFromApi) => dispatch(LOAD_ITEMS_SUCCESS(itemsFromApi)))
            .catch((error) => console.log(error));
    };
}

export const getEventsSuccess = (events) => {
    return {
        type: ActionTypes.LOAD_EVENTS_SUCCESS,
        events,
    };
}

export const getItemsSuccess = (items) => {
    return {
        type: ActionTypes.LOAD_ITEMS_SUCCESS,
        items,
    };
}

export const addEvent = (event) => {
    return function (dispatch) {
        return api
            .postEvent(event)
            .then((newEvent) => dispatch(POST_EVENT_SUCCESS(newEvent)))
            .catch((error) => console.log(error));
    };
}

export const addItem = (item) => {
    return function (dispatch) {
        return api
            .postItem(item)
            .then((newItem) => dispatch(POST_ITEM_SUCCESS(newItem)))
            .catch((error) => console.log(error));
    };
}

export const addEventSuccess = (event) => {
    return {
        type: ActionTypes.POST_EVENT,
        event,
    };
}

export const addItemSuccess = (item) => {
    return {
        type: ActionTypes.POST_ITEM,
        item,
    };
}

export const updateItem = (item) => {
    return function (dispatch) {
        return api
            .putItem(item)
            .then((updatedItem) => dispatch(UPDATE_ITEM_SUCCESS(updatedItem)))
            .catch((error) => console.log(error));
    };
}

export const updateItemSuccess = (item) => {
    return {
        type: ActionTypes.UPDATE_ITEM,
        item,
    };
}

export const deleteItem = (itemID) => {
    return function (dispatch) {
        return api
            .deleteItem(itemId)
            .then(() => dispatch(DELETE_ITEM_SUCCESS(itemID)))
            .catch((error) => console.log(error));
    }
}

export const deleteItemSuccess = (itemId) => {
    return {
        type: ActionTypes.DELETE_ITEM_SUCCESS,
        itemId,
    }
}