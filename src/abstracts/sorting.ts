type Sort = number;
abstract class BaseSort {
    sortOptions: { string: number };
    current: Sort;
    abstract setOptions(options: { string: number }): void;
    abstract setSort(sortId: string): void;
    abstract getSort(): Sort;
}

class SomeComponent {

    sorting = new class extends BaseSort {
        setOptions(options) {
            this.sortOptions = options;
        }
        setSort(id) {
            this.current = this.sortOptions[id];
        }
        getSort() {
            return this.current;
        }
    }

    
}

