
import item from './item.js';

const items = []; 
const hideCheckedItems = false;


function findById(id) {
    let findThis = store.items.find(id);
    return findThis;
}

function addItem(name) {
    try {
        item.validateName(name);
        item.create(name);
        this.items.push(name);
    } catch (error) {
        console.log('Error');
    };
};

function findAndUpdateName(id, newName) {
    try {
        item.validateName(newName);
        findById(id);
    } catch (error) {
        console.log('Cannot update name: ${error.message}');
    };
};

function findAndDelete(id) {
    let removal = store.items.find(id).splice();
    return removal;
}


export default {
    items,
    hideCheckedItems,
    findById,
    addItem,
    findAndUpdateName,
    findAndDelete
}



