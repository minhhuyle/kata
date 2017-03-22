/**
 * Created by MLE3657 on 22/03/2017.
 */


class Coffee{
    constructor(adapter){
        this.adapter = adapter;
    }

    makeCoffe(command){
        return this.adapter.makeCoffe(command);
    }

    makeTea(command){
        return this.adapter.makeTea(command);
    }

    makeChocolat(command){
        return this.adapter.makeChocolat(command);
    }
}


class DrinkMakerProtocole extends CoffeeAdapte{
    constructor(){
        this.visitor = new DrinkVisitor();
    }

    makeCoffe(sugar){
        return 'C:' + this.visitor.visit(sugar);
    }

    makeTea(sugar){
        return 'T:' + this.visitor.visit(sugar);
    }

    makeChocolat(sugar){
        return 'H:'+ this.visitor.visit(sugar);
    }
}


class DrinkVisitor{
    visit(sugar){
        var result ="";
        if(sugar > 0){
            result += sugar +":0";
        }else{
            result += "::";
        }

        return result;
    }
}