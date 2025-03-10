    //temporary a list made from seedGeneration
    //in reality a WebApi communication
    if (!storage) {
        const _seeder = new seedGenerator();
        this.books = new Book().seedMany(1_000, _seeder);
    }
    else {        
        const tmp = storage.getItem('LibraryService');
        if (tmp) {
            this.books = JSON.parse(tmp);
        }
        else{
            const _seeder = new seedGenerator();
            this.books = new Book().seedMany(1_000, _seeder);
            storage.setItem('LibraryService', JSON.stringify(this.books));
        }
    }