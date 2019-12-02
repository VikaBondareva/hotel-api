USE BowserHotel
GO 

CREATE PROCEDURE SelectCountRoomsWithBeds 
AS
BEGIN
	SELECT COUNT(countRooms) as countRooms, countDoubleBeds, countSingleBeds, AVG(price) as price
	FROM Rooms
	GROUP BY  countRooms, countDoubleBeds, countSingleBeds
END;

