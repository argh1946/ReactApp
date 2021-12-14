import React from 'react'

export default function TsTest() {

    enum Gender {
        Male,
        Female
    }

    interface IPerson {
        name: string,
        family: string,
        age: number,
        gender: Gender
    }

    class Person {
        constructor() {
            this.name = "ali";
            this.family = "rrr"
        }
        name: string;
        family: string;
    }

    var ii = new Person();
    ii.name = "alireza";
    ii.family = "gholami";



    function register(item: Person): string {

        console.log(item.name + " " + item.family);
        let a = item.name + " " + item.family;
        return a;
    }

    var item: IPerson = {
        name: "ali",
        family: "reza",
        age: 30,
        gender: Gender.Male
    };


    interface IPersonService {
        getAll(): IPerson[],
        getbyId(): Person,
        add(item: IPerson): IPerson,
        delete(item: IPerson): void
    }

    class PersonService implements IPersonService {
        constructor() {

        }
        static Id: number;
        getAll(): IPerson[] {
            throw new Error('Method not implemented.');
        }
        getbyId(): Person {
            let item = new Person();
            item.name = "aaaaaaaaaa";
            item.family = "bbbbbbbbbbb";
            console.log(item);
            return item;
        }
        add(item: IPerson): IPerson {
            throw new Error('Method not implemented.');
        }
        delete(item: IPerson): void {
            throw new Error('Method not implemented.');
        }
    }

    enum Dayes {
        shanbe = 1,
        yekshanbe = 2,
        doshanbe = 30,
    };


    var animal = {
        name: "aaaa",
        family: "bbbbb"
    };

    function fullName(x: string, y: string, ziba: string): string
    function fullName(x: string, y: string): string {
        let fn = x + y;

        return fn;
    }


    function ttt(x: (string | any[]), y: number): number {
        let a = x.length + y;
        console.log(a);
        return a;
    }


    return (
        <div>
            <h1>{ttt("ali", 6)}</h1>
            <h1>{register(ii)}</h1>

            <h1>{new PersonService().getbyId().name.toString()}</h1>
        </div>
    )
}

