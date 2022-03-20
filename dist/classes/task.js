// Klasa to przepis na podstawie którego tworzymy instancje
// Przed wywołaniem klasy używamy słowa NEW "new"
// public & private
//  public - dany properties lub dana metoda jest dostępna po zainstancjonowaniu danej klasy
//  private - ograniczenie konepcyjnie 
class TaskClass {
    constructor(name, done) {
        this.name = "Nowe zadanie";
        this.done = true;
        this.name = name;
        this.done = done;
        console.log("constructor!");
    }
}
// IMAGINE CODE BELOW IS IN APP.TS FILE 
const task = new TaskClass("Zadanie z constructora", false); //TaskClass o typie task (jest obiektem)
console.log(TaskClass);
//70000 - kwota wolna od podatku w I grupie podatkowej = 60363
// 7% powyżej 20556 = 39807 x 0,07
//podatek do zapłacenia : 2 786,49
