﻿db.products.remove({});
db.products.insertMany([
    { Slug: "g-xbx1-123", Name: "Xbox One", Price: 300, Currency: "CAD", Description: "TODO", CategoryId: "games", CategoryName: "Games", Rating: 5 } ,
    { Slug: "g-ps4-456", Name: "PS4", Price: 300, Currency: "CAD", Description: "TODO", CategoryId: "games", CategoryName: "Games", Rating: 5 } ,
    { Slug: "g-ns-789", Name: "Nintendo Switch", Price: 300, Currency: "CAD", Description: "TODO", CategoryId: "games", CategoryName: "Games", Rating: 5 } ,
    { Slug: "g-ps5-753;", Name: "PS5", Price: 300, Currency: "CAD", Description: "TODO", CategoryId: "games", CategoryName: "Games", Rating: 4 } ,
    { Slug: "g-xbxx-951", Name: "Xbox X Series", Price: 300, Currency: "CAD", Description: "TODO", CategoryId: "games", CategoryName: "Games", Rating: 4 } ,
    { Slug: "g-wiiu-789", Name: "wii U", Price: 300, Currency: "CAD", Description: "TODO", CategoryId: "games", CategoryName: "Games", Rating: 5 } ,
    { Slug: "g-xbxc-123", Name: "Xbox One Controller", Price: 59, Currency: "CAD", Description: "TODO", CategoryId: "games", CategoryName: "Games", Rating: 5 } ,
    { Slug: "g-ps4c-456", Name: "PS4 Controller", Price: 59, Currency: "CAD", Description: "TODO", CategoryId: "games", CategoryName: "Games", Rating: 5 } ,
    { Slug: "g-nsc-789", Name: "Nintendo Switch Controller", Price: 59, Currency: "CAD", Description: "TODO", CategoryId: "games", CategoryName: "Games", Rating: 5 } ,
    { Slug: "g-ps5c-753", Name: "PS5 Controller", Price: 69, Currency: "CAD", Description: "TODO", CategoryId: "games", CategoryName: "Games", Rating: 4 } ,
    { Slug: "g-xbxc-951", Name: "Xbox X Series Controller", Price: 69, Currency: "CAD", Description: "TODO", CategoryId: "games", CategoryName: "Games", Rating: 4 } ,
    { Slug: "g-wiiuc-789", Name: "wii U Controller", Price: 49, Currency: "CAD", Description: "TODO", CategoryId: "games", CategoryName: "Games", Rating: 5 } ,

    { Slug: "g-ps4-dsl3", Name: "Dark Souls 3", Price: 49, Currency: "CAD", Description: "Dark Souls, the series that spawned a hundred imitators thanks to its emphasis on difficult-but-fair gameplay, came to a close with Dark Souls 3, but what a way to go out. Featuring a variety of awe-inspiring locales (some grotesque, some majestic), the same finely-tuned combat fans had come to expect, and a new emphasis on speed and versatility inspired by FromSoftware's own Bloodborne, Dark Souls 3 is a wonderful encapsulation of the series as a whole; not as scattered as Dark Souls 2, not as rough around the edges as the original. If you've been curious about the Souls games, this is where you should start.", CategoryId: "games", CategoryName: "Games", Rating: 5 } ,
    { Slug: "g-ps4-ff15", Name: "Final Fantasy 15", Price: 49, Currency: "CAD", Description: "Four adrenaline-driven teens embark on the journey of a lifetime, but this ain’t no Road Trip. The RPG tale of Prince Noctis and his merry band straddles fantasy and reality with almost balletic grace, throwing in titanic monsters and classic missions alongside conversations about the weather.", CategoryId: "games", CategoryName: "Games", Rating: 5 } ,
    { Slug: "g-ps4-d00m", Name: "Doom (PS4)", Price: 49, Currency: "CAD", Description: "This modern reboot is worthy of the name Doom, and is basically the FPS equivalent of a muscular body: it's speedy, empowering, and hits incredibly hard.", CategoryId: "games", CategoryName: "Games", Rating: 5 } ,
    { Slug: "g-xbx1-d00m", Name: "Doom (Xbox One)", Price: 49, Currency: "CAD", Description: "This modern reboot is worthy of the name Doom, and is basically the FPS equivalent of a muscular body: it's speedy, empowering, and hits incredibly hard.", CategoryId: "games", CategoryName: "Games", Rating: 5 } ,
    { Slug: "g-ps4-rotr", Name: "Rise of the Tomb Raider", Price: 49, Currency: "CAD", Description: "The storyline, with Ms Croft venturing through Siberia in an attempt to complete her father's work in the lost city of Kitezh, doesn't scream originality but packs in some genuine shocks, while the platforming and zip-lining mechanics take Lara to heights she's never before reached – and not just figuratively.", CategoryId: "games", CategoryName: "Games", Rating: 5 } ,
    { Slug: "g-ps4-fo4", Name: "Fallout 4 (PS4)", Price: 49, Currency: "CAD", Description: "The storyline, with Ms Croft venturing through Siberia in an attempt to complete her father's work in the lost city of Kitezh, doesn't scream originality but packs in some genuine shocks, while the platforming and zip-lining mechanics take Lara to heights she's never before reached – and not just figuratively.", CategoryId: "games", CategoryName: "Games", Rating: 5 } ,
    { Slug: "g-xbx1-fo4", Name: "Fallout 4 (Xbox One)", Price: 49, Currency: "CAD", Description: "Hitting PS4 with the atomic force of a Fat Boy, Fallout 4’s excellent gunplay and crafting systems can trigger a nasty case of RPG-itis. Don't worry though, there's a Stimpak for that.", CategoryId: "games", CategoryName: "Games", Rating: 5 } ,
    { Slug: "g-xbx1-rmk", Name: "Resident Evil 2 Remake (Xbox One)", Price: 49, Currency: "CAD", Description: "Capcom's remake of survival horror classic Resident Evil 2 has gone down a storm with fans and newcomers alike, and it's no surprise. With gorgeous new graphics but the same brain-scratching puzzles and terrifying zombies, Resident Evil 2 is definitely a remake done right.", CategoryId: "games", CategoryName: "Games", Rating: 5 } ,

    { Slug: "mi-fdr-951", Name: "Fender Stratocaster", Price: 800, Currency: "CAD", Description: "TODO", CategoryId: "musical-instruments", CategoryName: "Musical Instruments", Rating: 5 } ,
    { Slug: "mi-gib-789", Name: "Gibson Les Paul", Price: 1500, Currency: "CAD", Description: "TODO", CategoryId: "musical-instruments", CategoryName: "Musical Instruments", Rating: 3 } ,
    { Slug: "mi-gljb-789", Name: "Geddy Lee's Jazz Bass", Price: 1500, Currency: "CAD", Description: "TODO", CategoryId: "musical-instruments", CategoryName: "Musical Instruments", Rating: 4 } ,
    
    { Slug: "mi-ddstr-463", Name: "D'Addario XT Electric Guitar Coated Strings", Price: 21.99, Currency: "CAD", Description: "TODO", CategoryId: "musical-instruments", CategoryName: "Musical Instruments", Rating: 4 } ,
    { Slug: "mi-ddstrl-455", Name: "D'Addario XT Acoustic Strings, Light, 12-53", Price: 21.99, Currency: "CAD", Description: "TODO", CategoryId: "musical-instruments", CategoryName: "Musical Instruments", Rating: 4 } ,
    { Slug: "mi-ddstrb-74", Name: "D'Addario XT Electric Bass Coated Nickel, Light Top/Medium Bottom Long Scale", Price: 44.34, Currency: "CAD", Description: "TODO", CategoryId: "musical-instruments", CategoryName: "Musical Instruments", Rating: 4 } ,
    
    { Slug: "s-pb-951", Name: "Paddle Boarding", Price: 500, Currency: "CAD", Description: "TODO", CategoryId: "sports", CategoryName: "Sports", Rating: 3 } ,
    { Slug: "s-jjk-789", Name: "Jiu-Jitsu Kimono", Price: 150, Currency: "CAD", Description: "TODO", CategoryId: "sports", CategoryName: "Sports", Rating: 3 } ,
    { Slug: "s-sb-789", Name: "Soccer Ball", Price: 15, Currency: "CAD", Description: "TODO", CategoryId: "sports", CategoryName: "Sports", Rating: 3 } ,
    
    { Slug: "b-peaa-789", Name: "Patterns of Enterprise Application Architecture", Price: 45, Currency: "CAD", Description: "The practice of enterprise application development has benefited from the emergence of many new enabling technologies. Multi-tiered object-oriented platforms, such as Java and .NET, have become commonplace. These new tools and technologies are capable of building powerful applications, but they are not easily implemented. Common failures in enterprise applications often occur because their developers do not understand the architectural lessons that experienced object developers have learned.", CategoryId: "books", CategoryName: "Books", Rating: 3 } ,
    { Slug: "b-goia-789", Name: "Go in Action", Price: 45, Currency: "CAD", Description: "Go in Action introduces the Go language, guiding you from inquisitive developer to Go guru. The book begins by introducing the unique features and concepts of Go. Then, you'll get hands-on experience writing real-world applications including websites and network servers, as well as techniques to manipulate and convert data at speeds that will make your friends jealous.", CategoryId: "books", CategoryName: "Books", Rating: 3 } ,
    { Slug: "b-alg-4445", Name: "Algorithms", Price: 45, Currency: "CAD", Description: "Introduction to Algorithms, the 'bible' of the field, is a comprehensive textbook covering the full spectrum of modern algorithms: from the fastest algorithms and data structures to polynomial-time algorithms for seemingly intractable problems, from classical algorithms in graph theory to special algorithms for string matching, computational geometry, and number theory.", CategoryId: "books", CategoryName: "Books", Rating: 4 } ,
    { Slug: "b-cd-789", Name: "Continuous Delivery", Price: 45, Currency: "CAD", Description: "Continuous Delivery is the logical next step after Continuous Integration for any modern software team. This book takes the admittedly ambitous goal of constantly delivering valuable software to customers, and makes it achievable through a set of clear, effective principles and practices.", CategoryId: "books", CategoryName: "Books", Rating: 5 } ,
    { Slug: "b-dpero-1515", Name: "Design Patterns: Elements of Reusable Object-Oriented Software", Price: 35, Currency: "CAD", Description: "Design Patterns: Elements of Reusable Object-Oriented Software is a software engineering book describing software design patterns. The book was written by Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides, with a foreword by Grady Booch.", CategoryId: "books", CategoryName: "Books", Rating: 5 } ,
    { Slug: "b-dedt-131", Name: "The Design of Everyday Things", Price: 35, Currency: "CAD", Description: "The Design of Everyday Things is a best-selling book by cognitive scientist and usability engineer Donald Norman about how design serves as the communication between object and user, and how to optimize that conduit of communication in order to make the experience of using the object pleasurable.", CategoryId: "books", CategoryName: "Books", Rating: 5 } ,
    { Slug: "b-caw-1773", Name: "Coders at Work", Price: 35, Currency: "CAD", Description: "This is a who's who in the programming world - a fascinating look at how some of the best in the world do their work. Patterned after the best selling Founders at Work, the book represents two years of interviews with some of the top programmers of our times.", CategoryId: "books", CategoryName: "Books", Rating: 5 } ,
    { Slug: "b-tmmm-189", Name: "The Mythical Man-Month", Price: 35, Currency: "CAD", Description: "Few books on software project management have been as influential and timeless as The Mythical Man-Month. With a blend of software engineering facts and thought-provoking opinions, Fred Brooks offers insight for anyone managing complex projects. These essays draw from his experience as project manager for the IBM System/360 computer family and then for OS/360, its massive software system. Now, 20 years after the initial publication of his book, Brooks has revisited his original ideas and added new thoughts and advice, both for readers already familiar with his work and for readers discovering it for the first time.", CategoryId: "books", CategoryName: "Books", Rating: 5 } ,
    
    { Slug: "c-rpi-789", Name: "Raspberry Pi", Price: 45, Currency: "CAD", Description: "The Raspberry Pi is a series of small single-board computers developed in the United Kingdom by the Raspberry Pi Foundation to promote teaching of basic computer science in schools and in developing countries. The original model became far more popular than anticipated, selling outside its target market for uses such as robotics.", CategoryId: "computers", CategoryName: "Computers", Rating: 3 } ,
    { Slug: "c-pppro-789", Name: "Pine Book Pro ARM", Price: 199, Currency: "CAD", Description: "A Powerful, Metal and Open Source ARM 64-Bit Laptop for Work, School or Fun. The Pinebook Pro is meant to deliver solid day-to-day Linux or *BSD experience and to be a compelling alternative to mid-ranged Chromebooks that people convert into Linux laptops.", CategoryId: "computers", CategoryName: "Computers", Rating: 3 } ,
    { Slug: "c-ptab-744", Name: "PineTab", Price: 99, Currency: "CAD", Description: "Attach the optional backlit magnetc keyboard to the PineTab for ultra-portable productivity. Use it on the go with the LTE modem adapter for untethered work or entertainment.", CategoryId: "computers", CategoryName: "Computers", Rating: 3 } ,
    
    { Slug: "tv-sbrv-55p", Name: "Sony Bravia 55", Price: 450, Currency: "CAD", Description: "TODO", CategoryId: "tvs", CategoryName: "TVs", Rating: 4 } ,
    { Slug: "tv-tnflx-55p", Name: "Toshiba Netflix 55", Price: 450, Currency: "CAD", Description: "TODO", CategoryId: "tvs", CategoryName: "TVs", Rating: 4 } ,
    
    { Slug: "hg-ggc-789", Name: "Grass Curter", Price: 40, Currency: "CAD", Description: "TODO", CategoryId: "home", CategoryName: "Home & Garden", Rating: 4 } ,
    { Slug: "hg-bbqc-789", Name: "BBQ Coal", Price: 40, Currency: "CAD", Description: "TODO", CategoryId: "home", CategoryName: "Home & Garden", Rating: 4 } ,
    
    { Slug: "aud-seab-789", Name: "Sony Earbuddy", Price: 40, Currency: "CAD", Description: "TODO", CategoryId: "headphones-audio", CategoryName: "Headphones & Audio", Rating: 4 },
    { Slug: "aud-bstd3-789", Name: "Beats Studio3 Wireless Headphones, Matte Black", Price: 400, Currency: "CAD", Description: "TODO", CategoryId: "headphones-audio", CategoryName: "Headphones & Audio", Rating: 4 },
    { Slug: "aud-smb-506041", Name: "Sennheiser MB Pro 1 (506041)", Price: 166, Currency: "CAD", Description: "TODO", CategoryId: "headphones-audio", CategoryName: "Headphones & Audio", Rating: 4 },
    { Slug: "aud-gcd-5041", Name: "Gaming Computer Desk with Storage for Controller, Headphone & Speaker - Black", Price: 159.71, Currency: "CAD", Description: "TODO", CategoryId: "headphones-audio", CategoryName: "Headphones & Audio", Rating: 4 },
    { Slug: "aud-ipn-753", Name: "iPhone 7", Price: 400, Currency: "CAD", Description: "TODO", CategoryId: "phones", CategoryName: "Headphones & Audio", Rating: 4 },
    { Slug: "aud-ipn-X11", Name: "iPhone X", Price: 999, Currency: "CAD", Description: "TODO", CategoryId: "phones", CategoryName: "Headphones & Audio", Rating: 4 },
    
    { Slug: "ph-sg-11", Name: "Samsung Galaxy 11", Price: 600, Currency: "CAD", Description: "TODO", CategoryId: "phones", CategoryName: "Headphones & Audio", Rating: 4 },
    { Slug: "ph-sg-20", Name: "Samsung Galaxy 20", Price: 800, Currency: "CAD", Description: "TODO", CategoryId: "phones", CategoryName: "Headphones & Audio", Rating: 4 },
    { Slug: "ph-iphone-X11-case1", Name: "iPhone X Case", Price: 9.99, Currency: "CAD", Description: "TODO", CategoryId: "phones", CategoryName: "Headphones & Audio", Rating: 2 },
]);

// insert categories
db.categories.remove({});
db.categories.insertMany([
    { Slug: "sports", Name: "Sports" } ,
    { Slug: "games", Name: "Games" } ,
    { Slug: "books", Name: "Books" } ,
    { Slug: "computers", Name: "Computers" } ,
    { Slug: "tvs", Name: "TVs" } ,
    { Slug: "home", Name: "Home" } ,
    { Slug: "musical-instruments", Name: "Musical Instruments" } ,
    { Slug: "headphones-audio", Name: "Headphones & Audio" } ,
    { Slug: "phones", Name: "Phones" }
]);