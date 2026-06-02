//generic with interface


interface Developer<T> {
    device: {
        brand: string;
        model: string;
        releasedYear: number;
    };
    name: string;
    age: number;
    smartwatch: T;
}

interface GoribProduct {
    stopwatch: boolean;
    calculator: boolean;
}

interface DhoniProduct {
    game: string;
    time: boolean;
}

const poorDev: Developer<GoribProduct> = {
    device: {
        brand: "Dell",
        model: "Inspiron",
        releasedYear: 2015,
    },
    name: "Rijuan",
    age: 20,
    smartwatch: {
        stopwatch: true,
        calculator: true,
    },
};

const richDev: Developer<DhoniProduct> = {
    device: {
        brand: "Dell",
        model: "Inspiron",
        releasedYear: 2015,
    },
    name: "Rijuan",
    age: 20,
    smartwatch: {
        game: "Cricket",
        time: true,
    },
};