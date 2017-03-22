/**
 * Created by MLE3657 on 22/03/2017.
 */


class Coffee{
    constructor(adapter){
        this.adapter = adapter;
    }

    makeCoffee(command){
        return this.adapter.makeCoffee(command);
    }

    makeTea(command){
        return this.adapter.makeTea(command);
    }

    makeChocolate(command){
        return this.adapter.makeChocolate(command);
    }
}


class DrinkMakerProtocole{
    constructor(){
        this.visitor = new DrinkVisitor();
    }

    makeCoffee(sugar){
        return 'C:' + this.visitor.visit(sugar);
    }

    makeTea(sugar){
        return 'T:' + this.visitor.visit(sugar);
    }

    makeChocolate(sugar){
        return 'H:'+ this.visitor.visit(sugar);
    }
}


class DrinkVisitor{
    visit(sugar){
        var result ="";
        if(sugar > 0){
            result += sugar +":0";
        }else{
            result += ":";
        }

        return result;
    }
}
module.exports.coffee = Coffee;
module.exports.drinkMakerProtocole = DrinkMakerProtocole;
