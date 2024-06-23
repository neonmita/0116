<?php

class Person
{
    private $name;
    private $lastname;
    private $age;
    private $hp;
    private $mom;
    private $dad;



    function __construct($name, $lastname, $age, $mom, $dad)
    {
        $this->name = $name;
        $this->lastname = $lastname;
        $this->age = $age;
        $this->mom = $mom;
        $this->dad = $dad;
        $this->hp = 100;
    }
    function setHp($hp)
    {
        if ($this->hp + $hp > 100) $this->hp = 100;
        else $this->hp = $this->hp + $hp;
    }

    function getHp()
    {
        return $this->hp;
    }

    function getName()
    {
        return $this->name;
    }

    function getlastname()
    {
        return $this->lastname;
    }

    function getAge()
    {
        return $this->age;
    }

    function getMom()
    {
        return $this->mom;
    }
    function getDad()
    {
        return $this->dad;
    }

    function sayHi($name)
    {
        return "Hi, $name! Im " . $this->name;
    }

    function getInfo()
    {
       return "<h3>Пару слов о моей семье:</h3><br>" .
            "Меня зовут " . $this->getName() . " мне " . $this->getAge(). ". " .  "Уровень моего здоровья " . $this->getHp() . " hp. Я еще молод. <br> " .
            "Мой отец " . $this->getDad()->getName() . " " . $this->getDad()->getLastname() . ". " .
            "Моя мать " . $this->getMom()->getName() . 
            " и моя бабушка " . $this->getMom()->getMom()->getName() . " живут далеко. <br>" .
            "Моего дедушку по матери зовут " . $this->getMom()->getDad()->getName() . " ему " . $this->getMom()->getDad()->getAge() . "<br>" .
            "Моего второго дедушку зовут " . $this->getDad()->getDad()->getName() . " " . $this->getDad()->getDad()->getLastname() . " ему " . $this->getDad()->getDad()->getAge() . "." . "<br>" .
            "Еще бабушка по отцу " . $this->getDad()->getMom()->getName() . " " . $this->getDad()->getMom()->getLastname() . ". ";
    }
}


$misha = new Person("Misha", "Ling Jun Peng", 68, null, null);
$vasilisa = new Person("Vasilisa", "Petrova", 65, null, null);

$lena = new Person("Lena", "Popova", 43, null, null);
$valera = new Person("Valera", "Popov", 45, null, null);



$igor = new Person("Igor", "Petrov", 21, $vasilisa, $misha);
$nina = new Person("Nina", "Petrova-Popova", 23, $lena, $valera);

$nik = new Person("Nikolay", "Petrov", 6, $nina, $igor);


echo $nik->getInfo();
