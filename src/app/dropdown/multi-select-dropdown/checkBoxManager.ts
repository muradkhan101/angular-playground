// Manages state of a group of checkboxes on page
// Maintains status of Main checkbox (toggle all) between checked, unchecked, and indeterminate

export class CheckBoxManager {
    private trueCount = 0;
    private checkBoxStatus = {};
    addCheckbox(id, state: boolean = false) {
        this.state[id] = state;
        if (state) {
            this.trueCount++;
        }
    }
    toggleOne(id) {
        this.state[id] = this.state[id]
            ? (this.trueCount-- , false)
            : (this.trueCount++ , true);
    }
    getCheckboxStatus(id) { return this.state[id]; }

    // Sets all boxes to true if mainChecked returns false
    // Otherwise sets all to false
    toggleAll() {
        let keys = Object.keys(this.checkBoxStatus);
        let newCount = this.mainChecked ? 0 : keys.length;
        this.state = keys.reduce((obj, key) => (obj[key] = this.mainChecked ? false : true, obj), {});
        this.trueCount = newCount;
    }
    // Resets state and replaces it with new set of IDs
    setNew(ids: Array<string>) {
        this.checkBoxStatus = ids.reduce((state, id) => (state[id] = false, state), {});
        this.trueCount = 0;
    }
    get state() { return this.checkBoxStatus; }
    set state(obj) { this.checkBoxStatus = obj; }

    // Returns true if only some boxes are checked
    // Returns false if NONE or ALL are checked
    get isIndeterminate() {
        let boxCount = this.boxCount;
        return !(this.trueCount === 0 || this.trueCount === boxCount);
    }

    // Returns true if ALL boxes are checked and at least one box exists
    get mainChecked() {
        let boxCount = this.boxCount;
        return boxCount === this.trueCount && this.trueCount !== 0;
    }
    get boxCount() { return Object.keys(this.state).length; }

    // Returns Array of IDs for boxes that are checked
    get checked() {
        return Object.keys(this.state)
            .filter(key => this.state[key]);
    }
    get numChecked() { return this.checked.length; }
}