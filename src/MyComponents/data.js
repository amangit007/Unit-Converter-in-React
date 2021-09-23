const datas = [
    {
        key: 0,
        Category: 'Common units',
        Standard: 'Base unit',
        Datatypes: {

            'Base unit': 'none',

            'exa': 'E',
            'peta': 'P',
            'tera': 'T',
            'giga': 'G',
            'mega': 'M',
            'kilo': 'k',
            'hecto': 'h',
            'deca': 'da',

            'deci': 'd',
            'centi': 'c',
            'milli': 'm',
            'micro': 'μ',
            'nano': 'n',
            'pico': 'p',
            'femto': 'f',
            'atto': 'a',


        },
        'Base unitBase unit': ['+', 0],

        'Base unitexa': ['/', 1e-18],
        'Base unitpeta': ['/',  1e-15 ],
        'Base unittera': ['/',   1e-12],
        'Base unitgiga': ['/',   1e-9],
        'Base unitmega': ['/',   1e-6],
        'Base unitkilo': ['/',   1e-3],
        'Base unithecto': ['/',   1e-2],
        'Base unitdeca': ['/',  1e-1],

        'Base unitdeci': ['/',  1e+1 ],
        'Base unitcenti': ['/',  1e+2 ],
        'Base unitmilli': ['/',   1e+3],
        'Base unitmicro': ['/',  1e+6 ],
        'Base unitnano': ['/',  1e+9 ],
        'Base unitpico': ['/',   1e+12],
        'Base unitfemto': ['/',  1e-15 ],
        'Base unitatto': ['/',  1e+18],

        'exaBase unit': ['*', 1e-18],
        'petaBase unit': ['*',  1e-15 ],
        'teraBase unit': ['*',   1e-12],
        'gigaBase unit': ['*',   1e-9],
        'megaBase unit': ['*',   1e-6],
        'kiloBase unit': ['*',   1e-3],
        'hectoBase unit': ['*',   1e-2],
        'decaBase unit': ['*',  1e-1],

        'deciBase unit': ['*',  1e+1 ],
        'centiBase unit': ['*',  1e+2 ],
        'milliBase unit': ['*',   1e+3],
        'microBase unit': ['*',  1e+6 ],
        'nanoBase unit': ['*',  1e+9 ],
        'picoBase unit': ['*',   1e+12],
        'femtoBase unit': ['*',  1e-15 ],
        'attoBase unit': ['*',  1e+18],



    },

    {
        key: 1,
        Category: 'Temperature',
        Standard: 'Kelvin',
        Datatypes: {
            'Kelvin': 'K',
            'Celsius': '°C',
            'Fahrenheit': '°F',
            'Rankine': '°R',
            'Reaumur': '°r',
        },



    },
    {
        key: 2,
        Category: 'Length',
        Standard: 'Meters',
        Datatypes: {
            'Meters': 'm',
            'Foot': 'ft',
            'Inch': 'in',
            'Kilometer': 'km',
            'Centimeter': 'cm',
            'Milimetre': 'mm',
            'Micrometers': 'µm',
            'Nanometers': 'nm',
            'Mile': 'mi',
            'Yard': 'yd',
            'Nautical mile': 'NM',
            'Decimeter': 'dm',
            'Fathom': 'ftm'
        },
        MetersMeters: ['+', 0],
        MetersFoot: ["*", 3.28084],
        MetersInch: ['*', 39.370079],
        MetersKilometer: ['/', 1000],
        MetersCentimeter: ['/', 0.01],
        MetersMilimetre: ['/', 0.001],
        MetersMicrometers: ['/', 1.0E-6],
        MetersNanometers: ['/', 1.0E-9],
        MetersMile: ['/', 1609.344],
        MetersYard: ['/', 0.9144],
        'MetersNautical mile': ['/', 1852],
        MetersDecimeter: ['/', 0.1],
        MetersFathom: ['/', 1.8288],

        KilometerMeters: ['*', 1000],
        CentimeterMeters: ['*', 0.01],
        MilimetreMeters: ['*', 0.001],
        MicrometersMeters: ['*', 1.0e-6],
        NanometersMeters: ['*', 1.0e-9],
        MileMeters: ['*', 1609.344],
        YardMeters: ['*', 0.9144],
        'Nautical mileMeters': ['*', 1852],
        DecimeterMeters: ['*', 0.1],
        FathomMeters: ['*', 1.8288],

        InchMeters: ['/', 39.370079],
        FootMeters: ["/", 3.28084],
    },
    {
        key: 3,
        Category: 'Mass',
        Standard: 'Kilograms',
        Datatypes: {
            'Kilograms': 'kg',
            'Grams': 'g',
            'Pounds': 'lb',
            'Tonne': 't',
            'Miligram': 'mg',
            'Microgram': 'µg',
            'Quintal': 'q',
            'Ounce': 'oz',
            'Stone(UK)': 'st',
            'Short ton(US)': 't',
            'Long ton(UK)': 't',
            'Carat': 'ct',
            'Grain': 'gr',


        },
        KilogramsKilograms: ['+', 0],
        KilogramsPounds: ['*', 2.20462262],
        KilogramsGrams: ['*', 1000],
        KilogramsTonne: ['/', 1000],

        'KilogramsMiligram': ['/', 1.0E-6],
        'KilogramsMicrogram': ['/', 1.0E-9],
        'KilogramsQuintal': ['/', 100],
        'KilogramsOunce': ['/', 0.0283495231],
        'KilogramsStone(UK)': ['/', 6.35029318],
        'KilogramsShort ton(US)': ['/', 907.18474],
        'KilogramsLong ton(UK)': ['/', 1016.0469088],
        'KilogramsCarat': ['/', 0.0002],
        'KilogramsGrain': ['/', 6.47989E-5],

        'MiligramKilograms': ['*', 1.0E-6],
        'MicrogramKilograms': ['*', 1.0E-9],
        'QuintalKilograms': ['*', 100],
        'OunceKilograms': ['*', 0.0283495231],
        'Stone(UK)Kilograms': ['*', 6.35029318],
        'Short ton(US)Kilograms': ['*', 907.18474],
        'Long ton(UK)Kilograms': ['*', 1016.0469088],
        'CaratKilograms': ['*', 0.0002],
        'GrainKilograms': ['*', 6.47989E-5],
        PoundsKilograms: ['/', 2.20462262],
        GramsKilograms: ['/', 1000],
        TonneKilograms: ['*', 1000],

    },
    {
        key: 4,
        Category: 'Speed',
        Standard: 'Meter per second',
        Datatypes: {
            'Meter per second': 'm/s',
            'Meter per hour': 'm/h',
            'Kilometer per second': 'km/s',
            'Kilometer per hour': 'km/h',
            'Miles per hour': 'mph',
            'Foot per second': 'fps',
            'Inch per second': 'ips',
            'Knot': 'kn',
            'Mach': 'Ma',
            'Lightspeed': 'c',
        },
        'Meter per secondMeter per second': ['+', 0],

        'Meter per secondMeter per hour': ['/', 0.0002777778],
        'Meter per secondKilometer per second': ['/', 1000],
        'Meter per secondKilometer per hour': ['/', 0.2777777778],
        'Meter per secondMiles per hour': ['/', 0.44704],
        'Meter per secondFoot per second': ['/', 0.3048],
        'Meter per secondInch per second': ['/', 0.0254],
        'Meter per secondKnot': ['/', 0.5144444444],
        'Meter per secondMach': ['/', 340.29],
        'Meter per secondLightspeed': ['/', 299792458],

        'Meter per hourMeter per second': ['*', 0.0002777778],
        'Kilometer per secondMeter per second': ['*', 1000],
        'Kilometer per hourMeter per second': ['*', 0.2777777778],
        'Miles per hourMeter per second': ['*', 0.44704],
        'Foot per secondMeter per second': ['*', 0.3048],
        'Inch per secondMeter per second': ['*', 0.0254],
        'KnotMeter per second': ['*', 0.5144444444],
        'MachMeter per second': ['*', 340.29],
        'LightspeedMeter per second': ['*', 299792458],



    },
    {
        key: 5,
        Category: 'Time',
        Standard: 'Second',
        Datatypes: {
            'Second': 's',
            'Nanosecond': 'ns',
            'Microsecond': 'µm',
            'Milisecond': 'ms',
            'Minute': 'min',
            'Hour': 'h',
            'Day': 'd',
            'Week': 'wk',
            'Month': 'm',
            'Year': 'y',
            'Decade': '',
            'Century': '',
            'Millennium': ''


        },
        'SecondSecond': ['+', 0],

        'SecondNanosecond': ['/', 1.0E-9],
        'SecondMicrosecond': ['/', 1.0E-6],
        'SecondMilisecond': ['/', 0.001],
        'SecondMinute': ['/', 60],
        'SecondHour': ['/', 3600],
        'SecondDay': ['/', 86400],
        'SecondWeek': ['/', 604800],
        'SecondMonth': ['/', 2628000],
        'SecondYear': ['/', 31536000],
        'SecondDecade': ['/', 315360000],
        'SecondCentury': ['/', 3153600000],
        'SecondMillennium': ['/', 31536000000],

        'NanosecondSecond': ['*', 1.0E-9],
        'MicrosecondSecond': ['*', 1.0E-6],
        'MilisecondSecond': ['*', 0.001],
        'MinuteSecond': ['*', 60],
        'HourSecond': ['*', 3600],
        'DaySecond': ['*', 86400],
        'WeekSecond': ['*', 604800],
        'MonthSecond': ['*', 2628000],
        'YearSecond': ['*', 31536000],
        'DecadeSecond': ['*', 315360000],
        'CenturySecond': ['*', 3153600000],
        'MillenniumSecond': ['*', 31536000000],



    },


    {
        key: 6,
        Category: 'Area',
        Standard: 'Square meter',
        Datatypes: {
            'Square meter': 'm^2',
            'Square kilometer': 'km^2',
            'Square decimeter': 'dm^2',
            'Square centimeter': 'cm^2',
            'Square millimeter': 'mm^2',
            'Square micron': 'µm^2',
            'Hectare': 'ha',
            'Acre': 'ac',
            'Square mile': 'mi^2',
            'Square yard': 'yd^2',
            'Square foot': 'ft^2',
            'Square inch': 'in^2',
            'Square rod': 'rd^2'

        },
        'Square meterSquare meter': ['+', 0],


        'Square meterSquare kilometer': ['/', 1000000],
        'Square meterSquare centimeter': ['/', 0.0001],
        'Square meterSquare millimeter': ['/', 1.0E-6],
        'Square meterSquare micron': ['/', 1.0E-12],
        'Square meterHectare': ['/', 10000],
        'Square meterAcre': ['/', 4046.8564224],
        'Square meterSquare mile': ['/', 2589988.110336],
        'Square meterSquare yard': ['/', 0.83612736],
        'Square meterSquare foot': ['/', 0.09290304],
        'Square meterSquare inch': ['/', 0.00064516],
        'Square meterSquare decimeter': ['/', 0.01],
        'Square meterSquare rod': ['/', 25.2928526],

        'Square kilometerSquare meter': ['*', 1000000],
        'Square centimeterSquare meter': ['*', 0.0001],
        'Square millimeterSquare meter': ['*', 1.0E-6],
        'Square micronSquare meter': ['*', 1.0E-12],
        'HectareSquare meter': ['*', 10000],
        'AcreSquare meter': ['*', 4046.8564224],
        'Square mileSquare meter': ['*', 2589988.110336],
        'Square yardSquare meter': ['*', 0.83612736],
        'Square footSquare meter': ['*', 0.09290304],
        'Square inchSquare meter': ['*', 0.00064516],
        'Square decimeterSquare meter': ['*', 0.01],
        'Square rodSquare meter': ['*', 25.2928526],



    },

    {
        key: 7,
        Category: 'Volume',
        Standard: 'Cubic meter',
        Datatypes: {
            'Cubic meter': 'm^3',
            'Cubic kilometer': 'km^3',
            'Cubic centimeter': 'cm^3',
            'Cubic millimeter': 'mm^3',
            'Liter': 'L',
            'Hectoliter': 'hl',
            'Deciliter': 'dl',
            'Centiliter': 'cl',
            Milliliter: 'mL',
            'Gallon (US)': 'gal(US)',
            'Quart (US)': 'qt(US)',
            'Pint (US)': 'pt(US)',
            'Cup (US)': '',
            'Tablespoon (US)': '',
            'Teaspoon (US)': '',
            'Cubic mile': 'mi^3',
            'Cubic yard': 'yd^3',
            'Cubic foot': 'ft^3',
            'Cubic inch': 'in^3',
            'Cubic decimeter': 'dm ^ 3',
            'Barrel': 'bbl'
        },
        'Cubic meterCubic meter': ['+', 0],



        'Cubic meterCubic kilometer': ['/', 1000000000],
        'Cubic meterCubic centimeter': ['/', 1.0E-6],
        'Cubic meterCubic millimeter': ['/', 1.0E-9],
        'Cubic meterLiter': ['/', 0.001],
        'Cubic meterHectoliter': ['/', 0.1],
        'Cubic meterDeciliter': ['/', 0.0001],
        'Cubic meterCentiliter': ['/', 1.0E-5],
        'Cubic meterMilliliter': ['/', 0.001],
        'Cubic meterGallon (US)': ['/', 0.0037854118],
        'Cubic meterQuart (US)': ['/', 0.0009463529],
        'Cubic meterPint (US)': ['/', 0.0004731765],
        'Cubic meterCup (US)': ['/', 0.0002365882],
        'Cubic meterTablespoon (US)': ['/', 1.47868E-5],
        'Cubic meterTeaspoon (US)': ['/', 4.92892159375E-6],
        'Cubic meterCubic mile': ['/', 4168181825.4406],
        'Cubic meterCubic yard': ['/', 0.764554858],
        'Cubic meterCubic foot': ['/', 0.0283168466],
        'Cubic meterCubic inch': ['/', 1.63871E-5],
        'Cubic meterCubic decimeter': ['/', 0.001],
        'Cubic meterBarrel': ['/', 0.1589872949],

        'Cubic kilometerCubic meter': ['*', 1000000000],
        'Cubic centimeterCubic meter': ['*', 1.0E-6],
        'Cubic millimeterCubic meter': ['*', 1.0E-9],
        'LiterCubic meter': ['*', 0.001],
        'HectoliterCubic meter': ['*', 0.1],
        'DeciliterCubic meter': ['*', 0.0001],
        'CentiliterCubic meter': ['*', 1.0E-5],
        'MilliliterCubic meter': ['*', 0.001],
        'Gallon (US)Cubic meter': ['*', 0.0037854118],
        'Quart (US)Cubic meter': ['*', 0.0009463529],
        'Pint (US)Cubic meter': ['*', 0.0004731765],
        'Cup (US)Cubic meter': ['*', 0.0002365882],
        'Tablespoon (US)Cubic meter': ['*', 1.47868E-5],
        'Teaspoon (US)Cubic meter': ['*', 4.92892159375E-6],
        'Cubic mileCubic meter': ['*', 4168181825.4406],
        'Cubic yardCubic meter': ['*', 0.764554858],
        'Cubic footCubic meter': ['*', 0.0283168466],
        'Cubic inchCubic meter': ['*', 1.63871E-5],
        'Cubic decimeterCubic meter': ['*', 0.001],
        'BarrelCubic meter': ['*', 0.1589872949],




    },


    {
        key:8,
        Category: 'Pressure',
        Standard: 'Pascal',
        Datatypes: {
            'Pascal': 'Pa',
            kilopascal: 'kPa',
            Hectopascal: 'hPa',
            'Megapascal': 'mPa',
            Bar: 'bar',
            'Pound per square inch': 'psi',
            'Kilopound per square inch': 'ksi',
            'Standard atmosphere': 'atm',
            'Kilonewton/square meter': 'kN/m^2',
            'Milibar': 'mbar',
            'Dyne/square centimeter': 'dyne/cm^3',
            'kilogram-force/square meter': 'kgf/cm^3',
            'Torr': 'torr',
            'Millimeter mercury': 'mmHg',
            'Millimeter water': 'mmH2O',

        },
        'PascalPascal': ['+', 0],

        'Pascalkilopascal': ['/', 1000],
        'PascalHectopascal': ['/', 100],
        'PascalMegapascal': ['/', 1000000],
        'PascalBar': ['/', 100000],
        'PascalPound per square inch': ['/', 6894.7572931783],
        'PascalKilopound per square inch': ['/', 6894757.2931783],
        'PascalStandard atmosphere': ['/', 101325],
        'PascalKilonewton/square meter': ['/', 1],
        'PascalMilibar': ['/', 100],
        'PascalDyne/square centimeter': ['/', 0.1],
        'Pascalkilogram-force/square meter': ['/', 9.80665],
        'PascalTorr': ['/', 133.3223684211],
        'PascalMillimeter mercury': ['/', 0.00133322],
        'PascalMillimeter water': ['/', 9.80665E-5],

        'kilopascalPascal': ['*', 1000],
        'HectopascalPascal': ['*', 100],
        'MegapascalPascal': ['*', 1000000],
        'BarPascal': ['*', 100000],
        'Pound per square inchPascal': ['*', 6894.7572931783],
        'Kilopound per square inchPascal': ['*', 6894757.2931783],
        'Standard atmospherePascal': ['*', 101325],
        'Kilonewton/square meterPascal': ['*', 1],
        'MilibarPascal': ['*', 100],
        'Dyne/square centimeterPascal': ['*', 0.1],
        'kilogram-force/square meterPascal': ['*', 9.80665],
        'TorrPascal': ['*', 133.3223684211],
        'Millimeter mercuryPascal': ['*', 0.00133322],
        'Millimeter waterPascal': ['*', 9.80665E-5],










    },

    {
        key: 9,
        Category: 'Plane Angle',
        Standard: 'Degree',
        Datatypes: {
            'Degree': '°',
            Radian: 'rad',
            Grad: '^g',
            Minute: "'",
            Second: '"',
            Sign: '',
            Mil: '',
            Revolution: 'r',
            Circle: '',
            Turn: '',
            Quadrant: '',
            'Right angle': '',
            Sextant: '',


        },
        'DegreeDegree': ['+', 0],


        DegreeRadian: ['/', 57.2957795131],
        DegreeGrad: ['/', 0.9],
        DegreeMinute: ['/', 0.0166666667],
        DegreeSecond: ['/', 0.0002777778],
        DegreeSign: ['/', 30],
        DegreeMil: ['/', 0.05625],
        DegreeRevolution: ['/', 360],
        DegreeCircle: ['/', 360],
        DegreeTurn: ['/', 360],
        DegreeQuadrant: ['/', 90],
        'DegreeRight angle': ['/', 90],
        DegreeSextant: ['/', 60],

        RadianDegree: ['*', 57.2957795131],
        GradDegree: ['*', 0.9],
        MinuteDegree: ['*', 0.0166666667],
        SecondDegree: ['*', 0.0002777778],
        SignDegree: ['*', 30],
        MilDegree: ['*', 0.05625],
        RevolutionDegree: ['*', 360],
        CircleDegree: ['*', 360],
        TurnDegree: ['*', 360],
        QuadrantDegree: ['*', 90],
        'Right angleDegree': ['*', 90],
        SextantDegree: ['*', 60],








    },


    {
        key: 10,
        Category: 'Force',
        Standard: 'Newton',
        Datatypes: {
            'Newton': 'N',
            'Kilonewton': 'kN',
            'Gram-force': 'gf',
            'Kilogram-force': 'kgf',
            'Ton-force (metric)': 'tf',
            'Dyne': 'dyn',
            'Pound-force': 'lbf',
            'Poundal': 'pdl',
            'Kilopond': 'kp',


        },
        'NewtonNewton': ['+', 0],

        'NewtonKilonewton': ['/', 1000],
        'NewtonGram-force': ['/', .00980665],
        'NewtonKilogram-force': ['/', 9.80665],
        'NewtonTon-force (metric)': ['/', 9806.65],
        'NewtonDyne': ['/', 1.0E-5],
        'NewtonPound-force': ['/', 4.4482216153],
        'NewtonPoundal': ['/', 0.1382549544],
        'NewtonKilopond': ['/', 9.80665],


        'KilonewtonNewton': ['*', 1000],
        'Gram-forceNewton': ['*', .00980665],
        'Kilogram-forceNewton': ['*', 9.80665],
        'Ton-force (metric)Newton': ['*', 9806.65],
        'DyneNewton': ['*', 1.0E-5],
        'Pound-forceNewton': ['*', 4.4482216153],
        'PoundalNewton': ['*', 0.1382549544],
        'KilopondNewton': ['*', 9.80665],






    },

    {
        key: 11,
        Category: 'Energy',
        Standard: 'Joule',
        Datatypes: {
            'Joule': 'J',
            'kilojoule': 'kJ',
            'kilowatt-hour': 'kW*h',
            'Watt-hour': 'W*h',
            'Calorie (nutritional)': '',
            'Gigajoule': 'GJ',
            'Megajoule': 'MJ',
            'Megaelectron-volt': 'MeV',
            'Kilolectron-volt': 'KeV',
            'Electron-volt': 'eV',
            'Gigawatt-hour': 'GWh',
            'Megawatt-hour': 'MWh',
            'Kilowatt-second': 'kWs',
            'Watt-second': 'Ws',
            'Newton meter': 'Nm',
            'Kilocalorie': 'kcal',
            'British thermal unit': 'BTU',
            'Kilogram-force meter': 'kgf-m',
            'Pound-force inch': 'lbf-in',
            'Pound-force foot': 'lbf-ft',




        },
        'JouleJoule': ['+', 0],

        'Joulekilojoule': ['/', 1000],
        'Joulekilowatt-hour': ['/', 3600000],
        'JouleWatt-hour': ['/', 3600],
        'JouleCalorie (nutritional)': ['/', 4186.8],
        'JouleGigajoule': ['/', 1000000000],
        'JouleMegajoule': ['/', 1000000],
        'JouleMegaelectron-volt': ['/', 1.60217733E-13],
        'JouleKilolectron-volt': ['/', 1.60217733E-16],
        'JouleElectron-volt': ['/', 1.60217733E-19],
        'JouleGigawatt-hour': ['/', 3600000000000],
        'JouleMegawatt-hour': ['/', 3600000000],
        'JouleKilowatt-second': ['/', 1000],
        'JouleWatt-second': ['/', 1],
        'JouleNewton meter': ['/', 1],
        'JouleKilocalorie': ['/', 4184],
        'JouleBritish thermal unit': ['/', 1055.05585262],
        'JouleKilogram-force meter': ['/', 9.8066499997],
        'JoulePound-force inch': ['/', 0.112984829],
        'JoulePound-force foot': ['/', 1.3558179483],

        'kilojouleJoule': ['*', 1000],
        'kilowatt-hourJoule': ['*', 3600000],
        'Watt-hourJoule': ['*', 3600],
        'Calorie (nutritional)Joule': ['*', 4186.8],
        'GigajouleJoule': ['*', 1000000000],
        'MegajouleJoule': ['*', 1000000],
        'Megaelectron-voltJoule': ['*', 1.60217733E-13],
        'Kilolectron-voltJoule': ['*', 1.60217733E-16],
        'Electron-voltJoule': ['*', 1.60217733E-19],
        'Gigawatt-hourJoule': ['*', 3600000000000],
        'Megawatt-hourJoule': ['*', 3600000000],
        'Kilowatt-secondJoule': ['*', 1000],
        'Watt-secondJoule': ['*', 1],
        'Newton meterJoule': ['*', 1],
        'KilocalorieJoule': ['*', 4184],
        'British thermal unitJoule': ['*', 1055.05585262],
        'Kilogram-force meterJoule': ['*', 9.8066499997],
        'Pound-force inchJoule': ['*', 0.112984829],
        'Pound-force footJoule': ['*', 1.3558179483],







    },

    {
        key: 12,
        Category: 'Power',
        Standard: 'Watt',
        Datatypes: {
            'Watt': 'W',
            'Miliwatt': 'mW',
            'Kilowatt': 'kW',
            'Megawatt': 'mW',
            'Horsepower(HP)': 'HP',
            'Horsepower(PS)': 'PS',
            'Decibel miliwatt': 'dBm',
            'Decibel watt': 'dBw',
            'Kilocalorie/hour': 'kcal/h',
            'Btu/h': 'Btu/h',

        },
        'WattWatt': ['+', 0],


        'WattMiliwatt': ['/', 0.001],
        'WattKilowatt': ['/', 1000],
        'WattMegawatt': ['/', 1000000],
        'WattHorsepower(HP)': ['/', 745.6998715823],
        'WattHorsepower(PS)': ['/', 735.49875],
        'WattDecibel miliwatt': ['/', 0.00125893],
        'WattDecibel watt': ['/', 1.258925],
        'WattKilocalorie/hour': ['/', 1.163],
        'WattBtu/h': ['/', 0.2930710702],

        'MiliwattWatt': ['*', 0.001],
        'KilowattWatt': ['*', 1000],
        'MegawattWatt': ['*', 1000000],
        'Horsepower(HP)Watt': ['*', 745.6998715823],
        'Horsepower(PS)Watt': ['*', 735.49875],
        'Decibel miliwattWatt': ['*', 0.00125893],
        'Decibel wattWatt': ['*', 1.258925],
        'Kilocalorie/hourWatt': ['*', 1.163],
        'Btu/hWatt': ['*', 0.2930710702],




    },

    
    {
        key: 13,
        Category: 'Fuel Consumption',
        Standard: 'Meter/liter',
        Datatypes: {
            'Meter/liter':'m/L',
            'Kilometer/liter':'km/l',
            'Liter/100 kilometer':'l/100km',
            'Kilomter/gallon(US)':'km/gal',             
            'Mile/gallon(US)':'mi/gal',
            'gallon/100 mile(US)':'gal/100km',             
            'Mile/gallon(UK)':'mi/gal',
            'gallon/100 mile(UK)':'gal/100km',
        },
        'Meter/literMeter/liter': ['+', 0],

        'Meter/literKilometer/liter':['/',  1000],
        'Meter/literLiter/100 kilometer':['/', 100000 ],
        'Meter/literKilomter/gallon(US)':['/', 264.1720524 ],             
        'Meter/literMile/gallon(US)':['/', 425.1437075 ],
        'Meter/litergallon/100 mile(US)':['/', 42514.37075 ],
                    
        'Meter/literMile/gallon(UK)':['/',354.00619   ],
        'Meter/litergallon/100 mile(UK)':['/', 35400.618996  ],
         
        'Kilometer/literMeter/liter':['*',  1000],
        'Liter/100 kilometerMeter/liter':['*', 100000 ],
        'Kilomter/gallon(US)Meter/liter':['*', 264.1720524 ],             
        'Mile/gallon(US)Meter/liter':['*', 425.1437075 ],
        'gallon/100 mile(US)Meter/liter':['*', 42514.37075 ],           
        'Mile/gallon(UK)Meter/liter':['*',354.00619   ],
        'gallon/100 mile(UK)Meter/liter':['*', 35400.618996  ],

    },

     
    {
        key: 14,
        Category: 'Data Storage',
        Standard: 'Bit',
        Datatypes: {
            Bit:'b',
            Nibble:'',
            Byte:'B',
            Kilobit:'Kb',
            Kibibit:'Kib',
            Kilobyte:'KB',
            Kibibyte:'KiB',

            Megabit:'Mb',
            Mebibit:'Mib',
            Megabyte:'MB',
            Mebibyte:'MiB',

            Gigabit:'Gb',
            Gibibit:'Gib',
            Gigabyte:'GB',
            Gibibyte:'GiB',

            Terabit:'Tb',
            Tebibit:'Tib',
            Terabyte:'TB',
            Tebibyte:'TiB',

            Petabit:'Pb',
            Pebibit:'Pib',
            Petabyte:'PB',
            Pebibyte:'PiB',

            Exabit:'Eb',
            Exbibit:'Eib',
            Exabyte:'EB',
            Exbibyte:'EiB',

        },
        'BitBit': ['+', 0],

        BitNibble:['/', 4 ],
        BitByte:['/',  8],

        BitKilobit:['/', 1000 ],
        BitKibibit:['/', 1024 ],
        BitKilobyte:['/', 8000 ],
        BitKibibyte:['/', 8192 ],

        BitMegabit:['/',  1e+6],
        BitMebibit:['/', 2**20 ],
        BitMegabyte:['/',8*(10**6)  ],
        BitMebibyte:['/', 8*(2**20) ],

        BitGigabit:['/', 1e+9],
        BitGibibit:['/', 2**30 ],
        BitGigabyte:['/', 8*(10**9)  ],
        BitGibibyte:['/', 8*(2**30) ],

        BitTerabit:['/',1e+12 ],
        BitTebibit:['/',2**40  ],
        BitTerabyte:['/', 8*(10**12)  ],
        BitTebibyte:['/', 8*(2**40)  ],

        BitPetabit:['/', 1e+15 ],
        BitPebibit:['/', 2**50 ],
        BitPetabyte:['/',8*(10**15)   ],
        BitPebibyte:['/',  8*(2**50) ],

        BitExabit: ['/',1e+18],
        BitExbibit:['/', 2**60 ],
        BitExabyte: ['/', 8*(10**18)  ],
        BitExbibyte:['/', 8*(2**60)  ],



        NibbleBit:['*', 4 ],
        ByteBit:['*',  8],

        KilobitBit:['*', 1000 ],
        KibibitBit:['*', 1024 ],
        KilobyteBit:['*', 8000 ],
        KibibyteBit:['*', 8192 ],

        MegabitBit:['*',  1e+6],
        MebibitBit:['*', 2**20 ],
        MegabyteBit:['*',8*(10**6)  ],
        MebibyteBit:['*', 8*(2**20) ],

        GigabitBit:['*',  1e+9],
        GibibitBit:['*', 2**30 ],
        GigabyteBit:['*', 8*(10**9)  ],
        GibibyteBit:['*', 8*(2**30) ],

        TerabitBit:['*', 1e+12 ],
        TebibitBit:['*',2**40  ],
        TerabyteBit:['*', 8*(10**12)  ],
        TebibyteBit:['*', 8*(2**40)  ],

        PetabitBit:['*', 1e+15 ],
        PebibitBit:['*', 2**50 ],
        PetabyteBit:['*',8*(10**15)   ],
        PebibyteBit:['*',  8*(2**50) ],

        ExabitBit: ['*', 1e+18],
        ExbibitBit:['*', 2**60 ],
        ExabyteBit: ['*', 8*(10**18)  ],
        ExbibyteBit:['*', 8*(2**60)  ],
       
    },









];
export default datas;
