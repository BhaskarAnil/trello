// imports
import { createList } from "./lists.js";
import { createCard } from "./cards.js";
import { createCheckList } from "./checklist.js";
import { createCheckItem } from "./checkitems.js";
import {boardId, baseUrl, apiKey, token} from "./config.js";

// ---------  functions to add (lists, cards, checklists, checkitems) -------------

// function to add new list
export async function addNewList(name) {
  try {
    let rawListData = await fetch(
      `${baseUrl}lists?name=${name}&idBoard=${boardId}&pos=bottom&key=${apiKey}&token=${token}`,
      { method: "POST" }
    );
    let listData = await rawListData.json();
    return listData;
  } catch (err) {
    console.error(`Error while adding new list: ${err}`);
  }
}

// function to add new card
export async function addNewCard(cardName, listId) {
  try {
    let rawCardData = await fetch(
      `${baseUrl}cards?idList=${listId}&key=${apiKey}&token=${token}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: cardName }),
      }
    );
    let cardData = await rawCardData.json();
    return cardData;
  } catch (err) {
    console.error(`Error while adding new card: ${err}`);
  }
}

// add new checklist
export async function addNewCheckList(checkListName, cardId) {
  try {
    let rawCheckListData = await fetch(
      `${baseUrl}checklists?idCard=${cardId}&key=${apiKey}&token=${token}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: checkListName }),
      }
    );
    let checklistData = await rawCheckListData.json();
    return checklistData;
  } catch (err) {
    console.error(`Error while adding new check list : ${err}`);
  }
}

// add new check item
export async function addNewCheckItem(content, checklistId) {
  try {
    let rawCheckItemData = await fetch(
      `${baseUrl}checklists/${checklistId}/checkItems?key=${apiKey}&token=${token}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: content }),
      }
    );

    let checkItemData = await rawCheckItemData.json();
    return checkItemData;
  } catch (err) {
    console.error(`Error while adding new check item : ${err}`);
  }
}
// -------------------------  functions for updating --------------------------------
// function for updating list name
export async function updateListName(listId, newName) {
  try {
    await fetch(`${baseUrl}lists/${listId}?key=${apiKey}&token=${token}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newName }),
    });
  } catch (err) {
    console.log(`Error while updating a list with list id : ${listId}`);
  }
}

// function for updating card name
export async function updateCardName(cardId, newName) {
  try {
    await fetch(`${baseUrl}cards/${cardId}?key=${apiKey}&token=${token}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newName }),
    });
  } catch (err) {
    console.log(`Error while updating a card with card id : ${cardId}`);
  }
}

// function for updating checklist name
export async function updateCheckListName(checkListId, newName) {
  try {
    await fetch(
      `${baseUrl}checklists/${checkListId}?key=${apiKey}&token=${token}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newName }),
      }
    );
  } catch (err) {
    console.log(
      `Error while updating a checkList with checkList id ${checkListId} : ${err}`
    );
  }
}

// function to update checkitem progress

export async function updateCheckItemProgress(
  progress,
  checkItemId,
  checklistId
) {
  try {
    let rawCardData = await fetch(
      `${baseUrl}checklists/${checklistId}/cards?key=${apiKey}&token=${token}`
    );
    let cardData = await rawCardData.json();
    var cardId = cardData[0].id;
  } catch (err) {
    console.log(
      `Error while getting card id of a checklist with checklist id ${checklistId} : ${err} `
    );
  }
  try {
    await fetch(
      `${baseUrl}cards/${cardId}/checklist/${checklistId}/checkItem/${checkItemId}?key=${apiKey}&token=${token}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ state: progress }),
      }
    );
  } catch (err) {
    console.log(
      `Error while updating a checkitem with checkitem id : ${checkItemId}`
    );
  }
}

// function to update checkitem

export async function updateCheckItem(content, checkItemId, checklistId) {
  try {
    let rawCardData = await fetch(
      `${baseUrl}checklists/${checklistId}/cards?key=${apiKey}&token=${token}`
    );
    let cardData = await rawCardData.json();
    var cardId = cardData[0].id;
  } catch (err) {
    console.log(
      `Error while getting card id of a checklist with checklist id ${checklistId} : ${err} `
    );
  }
  try {
    await fetch(
      `${baseUrl}cards/${cardId}/checklist/${checklistId}/checkItem/${checkItemId}?key=${apiKey}&token=${token}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: content }),
      }
    );
  } catch (err) {
    console.log(
      `Error while updating a checkitem with checkitem id : ${checkItemId}`
    );
  }
}

// -------------------------  functions for deleting --------------------------------

// function for delete a list
export async function deleteList(listId) {
  try {
    await fetch(
      `${baseUrl}lists/${listId}/closed?key=${apiKey}&token=${token}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ value: true }),
      }
    );
  } catch (err) {
    console.log(`Error while deleting a list with list id : ${listId}`);
  }
}

// function for delete a card
export async function deleteCard(cardId) {
  try {
    await fetch(
      `${baseUrl}cards/${cardId}/closed?key=${apiKey}&token=${token}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ value: true }),
      }
    );
  } catch (err) {
    console.log(`Error while deleting a card with card id : ${cardId}`);
  }
}

// function for delete checklist
export async function deleteCheckList(checkListId) {
  try {
    await fetch(
      `${baseUrl}checklists/${checkListId}?key=${apiKey}&token=${token}`,
      {
        method: "DELETE",
      }
    );
  } catch (err) {
    console.log(
      `Error while deleting a checkList with checklist id : ${checkListId}`
    );
  }
}

// function for delete checkitem
export async function deleteCheckItem(checkItemId, checkListId) {
  try {
    await fetch(
      `${baseUrl}checklists/${checkListId}/checkItems/${checkItemId}?key=${apiKey}&token=${token}`,
      {
        method: "DELETE",
      }
    );
  } catch (err) {
    console.log(
      `Error while deleting a check item with checkitem id : ${checkItemId}`
    );
  }
}

// -------------------------  functions for loadings --------------------------------

// loading checkItems in a checklist
async function loadingCheckitemData(checklistId) {
  try {
    let rawCheckItemData = await fetch(
      `${baseUrl}checklists/${checklistId}/checkItems?key=${apiKey}&token=${token}`
    );
    let checkItems = await rawCheckItemData.json();
    for (let item of checkItems) {
      await createCheckItem(item.name, item.state, item.id, checklistId);
    }
  } catch (err) {
    console.log(`Error while loading check items :`, err);
  }
}

// loading checklists in a card
async function loadingChecklistData(cardId) {
  try {
    let rawChecklistData = await fetch(
      `${baseUrl}cards/${cardId}/checklists?key=${apiKey}&token=${token}`
    );
    let checklists = await rawChecklistData.json();

    for (const checklist of checklists) {
      await createCheckList(
        checklist.name,
        checklist.id,
        `${cardId}-card-Data-container`
      );
      await loadingCheckitemData(checklist.id);
    }
  } catch (err) {
    console.log(`Error loading checklists for card ${cardId}:`, err);
  }
}

// loading cards in a list
async function loadingCardData(listId) {
  try {
    let rawCardsData = await fetch(
      `${baseUrl}lists/${listId}/cards?&key=${apiKey}&token=${token}`
    );
    let cardsData = await rawCardsData.json();

    for (const card of cardsData) {
      await createCard(card.name, card.id, card.idList);
      await loadingChecklistData(card.id);
    }
  } catch (err) {
    console.log(`Error while loading cards data  ${err}`);
  }
}

// loading lists in a board
export async function loadingListsData() {
  try {
    let rawListsData = await fetch(
      `${baseUrl}boards/${boardId}/lists?&key=${apiKey}&token=${token}`
    );
    let listData = await rawListsData.json();
    for (let list of listData) {
      await createList(list.name, list.id);
      await loadingCardData(list.id);
    }
  } catch (err) {
    console.log(`Error when loading lists data ${err}`);
  }
}
