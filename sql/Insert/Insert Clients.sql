USE [BowserHotel]
GO
INSERT INTO Clients
     (name,surname,phoneNumber,email,phoneCountryId,status, gender)
VALUES
     ('Mads' , 'Kristensen' , '31500201' , 'mads.kristensen@mail.com', 1, 'notVerified', 'male'),
     ('Nina', 'Morris', '7644896630' , 'nina.morris@gmail.com', 2, 'actice', 'male'),
     ('Ruslan' , 'Emel' , '296336895' , '@mail.com', 2, 'notVerified', 'male'),
     ('Lourdes' , 'Emel' , '33686374427' , 'lourdes.carmona@example.com', 3, 'blocked', 'female'),
     ('Leni' , 'Kokko' , '07835728' , 'nna.kokko20343@mail.com', 4, 'active', 'female'),
     ('Molly' , 'Graham' , '0218911595' , 'molly.graham@mail.com', 2, 'active', 'female'),
     ('Florence' , 'Clark' , '3903109175' , 'florence.clark@example.com', 3, 'active', 'female'),
     ('Andy' , 'Matthews' , '0613036310' , 'andy.matthews@example.com', 5, 'deleted', 'male'),
     ('Jack' , 'Johnson' , '0769678759' , 'jack.johnson@example.com', 1, 'active', 'male'),
     ( 'Ethan' , 'Bergeron' , '6132828011' , 'ethan.bergeron@example.com', 6, 'active', 'male'),
     ( 'John' , 'Navarro' , '982451187' , 'john.navarro@example.com', 7, 'active', 'male'),
     ( 'Tammy' , 'Lord' , '01946728234' , 'tammy.lord@example.com', 5, 'notVerified', 'female'),
     ( 'Iida' , 'Laine' , '02665788' , 'iida.laine@example.com', 2, 'blocked', 'female'),
     ( 'Patrick' , 'Bennett' , '3149127093' , 'PatrickHBennett@teleworm.us', 6, 'actice', 'male'),
     ( 'Olympics', 'Bezrukova', '01.77.16.05.12' , 'OlympicsAlexandrova@rhyta.com', 5, 'actice', 'female'),
     ( 'Dinar' , 'Alexandrova' , '04.91.08.60.51' , 'DinarAlexandrova@rhyta.com', 5, 'bloked', 'female'),
     ( 'Patricia' , 'Fokina' , '05.20.30.19.23' , 'PatriciaFokina@teleworm.us', 5, 'actice', 'female'),
     ( 'Isaiah ' , 'Kornilova ' , '604453750' , 'RiceKornilova@jourrapide.com', 3, 'active', 'male'),
     ( 'Chariton' , 'Demidov' , '69 924 47 21' , 'CharitonDemidov@dayrep.com', 3, 'active', 'male'),
     ( 'Inna' , 'Abramova' , '67 487 48 78' , 'InnaAbramova@jourrapide.com', 3, 'active', 'female'),
     ( 'Kondrat' , 'Tikhonov' , '69 390 08 40' , 'KondratTikhonov@armyspy.com', 3, 'deleted', 'male'),
     ( 'Manuela' , 'Cunha' , '0391 8112390' , 'ManuelaDiasCunha@jourrapide.com', 7, 'active', 'female'),
     ( 'Gustavo' , 'Alves' , '0368 3398075' , 'GustavoCunhaAlves@dayrep.com', 7, 'notVerified', 'male'),
     ( 'Raissa' , 'Ferreira' , '0330 9468336' , 'RaissaFernandesFerreira@armyspy.com', 7, 'active', 'female'),
     ( 'Muhammed' , 'Tesmi' , '954-717-0347' , 'MuhammedTesmi@dayrep.com', 6, 'notVerified', 'male'),
     ( 'Kisanet' , 'Osman' , '347-223-3903' , 'KisanetOsman@teleworm.us', 6, 'blocked', 'female'),
     ( 'Kristin' , 'Kruger' , '21 253 184 7863' , 'KristinKruger@rhyta.com', 8, 'notVerified', 'female'),
     ( 'Nicole', 'Schulz', '21 266 637 2399' , 'NicoleSchulz@teleworm.us', 8, 'actice', 'female'),
     ( 'Manuela' , 'Bosch' , '21 258 348 1762' , 'ManuelaBosch@teleworm.us', 8, 'notVerified', 'female'),
     ( 'Ralf' , 'Kohl' , '21 245 125 3399' , 'RalfKohl@dayrep.com', 8, 'blocked', 'male'),
     ( 'Justina' , 'Roque' , '(29)510-84-28' , 'JustinaRoqueChavez@dayrep.com', 1, 'active', 'female'),
     ( 'Bienvenido' , 'Partida' , '(03) 5336 7686' , 'BienvenidoPartidaLeal@jourrapide.com', 2, 'active', 'male'),
     ( 'Valda' , 'Anguiano' , '(07) 4070 9690' , 'ValdaPalaciosAnguiano@rhyta.com', 3, 'notVerified', 'female'),
     ( 'Celerino' , 'Orosco' , '(07) 3473 4011' , 'CelerinoJaimesOrosco@armyspy.com', 2, 'active', 'male'),
     ( 'Serrano' , 'Figueroa' , '326 295 616' , 'PanfiloSerranoFigueroa@jourrapide.com', 1, 'active', 'male'),
     ( 'Indiana' , 'Robledo' , '382 601 806' , 'IndianaBernalRobledo@armyspy.com', 3, 'active', 'female'),
     ( 'Eco' , 'Matos' , '724 030 338' , 'EcoBritoMatos@dayrep.com', 4, 'active', 'male'),
     ( 'Emil' , 'Abreu' , '574 445 175' , 'EmilAbreuEstevez@teleworm.us', 4, 'notVerified', 'male'),
     ( 'Midas' , 'Benavidez' , '734118134' , 'MidasMuroBenavidez@rhyta.com', 2, 'active', 'male'),
     ( 'Vilma' , 'Casares' , '334617296' , 'VilmaAriasCasares@teleworm.us', 1, 'active', 'female');