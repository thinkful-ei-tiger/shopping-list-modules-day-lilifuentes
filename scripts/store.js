
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
        let thing = item.create(name);
        this.items.push(thing);
    } catch (error) {
        console.log('Error');
    };
};

function findAndToggleChecked(id){
    let lookup = this.findById(id).toggleAttribute(checked, true);
    return lookup;
}

function findAndUpdateName(id, newName) {
    try {
        item.validateName(newName);
        findById(id);
    } catch (error) {
        console.log('Cannot update name: ${error.message}');
    };
};

function findAndDelete(id) {
    let removal = this.items.findIndex(item => item.id === id);
    this.items.splice(removal, 1);
    return removal;
}

function toggleCheckedFilter() {
    this.hideCheckedItems;  
}


export default {
    items,
    hideCheckedItems,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
    toggleCheckedFilter
}



