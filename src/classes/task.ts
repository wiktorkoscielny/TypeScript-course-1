// Klasa to przepis na podstawie którego tworzymy instancje
// Przed wywołaniem klasy używamy słowa NEW "new"
// public & private
//  public - dany properties lub dana metoda jest dostępna po zainstancjonowaniu danej klasy
//  private - ograniczenie konepcyjnie 

class TaskClass {
    name: string = "Nowe zadanie";
    done: boolean = true;

    constructor(name: string, done: boolean) { //odpala się, za każdym razem gdy tworzymy nową instancję danej klasy
        this.name = name;
        this.done = done;
        console.log("constructor!")
    }
}

// IMAGINE CODE BELOW IS IN APP.TS FILE 
const task = new TaskClass("Zadanie z constructora", false); //TaskClass o typie task (jest obiektem)

console.log(TaskClass);



