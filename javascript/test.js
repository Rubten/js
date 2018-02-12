var messige = {
    name: "abo",
    age: 17,
    z: "seto",
    show: function () {
        var self = this;

        function test() {
            alert(self.name)
        }

        test();
    }
};

/*for (var i in messige) {
    alert(i + ":" + messige[i]);
}*/

function say() {
    alert(this.age);
}

var age = 10;
/*messige.show();*/

var som = [45, 456, 78];

var b = [];

som[99] = 7;

/*som.forEach(function (v) {alert(v*10)  });*/

/*var x = som.map(function (v) {return v * 10  });*/

/*var x = som.map();*/
/*
alert(x);*/
