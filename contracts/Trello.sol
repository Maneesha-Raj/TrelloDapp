
//Trello.sol smart contract

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Trello {
    struct Card {
        uint id;
        string text;
    }

    struct ChecklistItem {
        string text;
        bool completed;
    }

    struct Project {
        string name;
        string[] members;
        string dueDate;
        ChecklistItem[] checklist;
    }

    struct List {
        uint id;
        string title;
        Card[] cards;
        Project[] projects; // Store projects related to the list
    }

    mapping(uint => List) public lists;
    uint public listCount;

    event ListCreated(uint listId, string title);
    event ProjectAdded(uint listId, string projectName);

    // Create a new list with the given title
    function createList(string memory _title) public {
        listCount++;
        List storage newList = lists[listCount];
        newList.id = listCount;
        newList.title = _title;

        // Emit the event when a new list is created
        emit ListCreated(listCount, _title);
    }

    // Add a new card to a specified list
    function addCard(uint _listId, string memory _text) public {
        List storage list = lists[_listId];
        uint cardId = list.cards.length + 1;
        list.cards.push(Card(cardId, _text));
    }

    // Add a new project to a specified list
    function addProject(uint _listId, string memory _name, string[] memory _members, string memory _dueDate, ChecklistItem[] memory _checklist) public {
        List storage list = lists[_listId];

        // Create the new project
        Project storage newProject = list.projects.push();
        newProject.name = _name;
        newProject.members = _members;
        newProject.dueDate = _dueDate;

        // Copy checklist items manually to storage
        for (uint i = 0; i < _checklist.length; i++) {
            newProject.checklist.push(ChecklistItem({
                text: _checklist[i].text,
                completed: _checklist[i].completed
            }));
        }

        emit ProjectAdded(_listId, _name);
    }

    // Retrieve a list by its ID
    function getList(uint _listId) public view returns (List memory) {
        return lists[_listId];
    }
}




//-----------------------------------------------------------------------------------------------------------------------













