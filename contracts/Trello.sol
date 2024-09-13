
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Trello {
    struct Card {
        uint id;
        string text;
    }

    struct List {
        uint id;
        string title;
        Card[] cards;
    }

    mapping(uint => List) public lists;
    uint public listCount;

    // Create a new list with the given title
    function createList(string memory _title) public {
        listCount++;
        List storage newList = lists[listCount];
        newList.id = listCount;
        newList.title = _title;
    }

    // Add a new card to a specified list
    function addCard(uint _listId, string memory _text) public {
        List storage list = lists[_listId];
        uint cardId = list.cards.length + 1;
        list.cards.push(Card(cardId, _text));
    }

    // Retrieve a list by its ID
    function getList(uint _listId) public view returns (List memory) {
        return lists[_listId];
    }
}








//--------------------------------------  ********------------------------------------



// pragma solidity 0.8.20;

// contract Trello {
//     struct Card {
//         uint id;
//         string text;
//     }

//     struct List {
//         uint id;
//         string title;
//         Card[] cards;
//     }

//     mapping(uint => List) public lists;
//     uint public listCount;

//     function createList(string memory _title) public {
//         listCount++;
//         lists);
//     }

//     function addCard(uint _listId, string memory _text) public {
//         List storage list = lists[_listId];
//         list.cards.push(Card(list.cards.length + 1, _text));
//     }

//     function getList(uint _listId) public view returns (List memory) {
//         return lists[_listId];
//     }
// }



