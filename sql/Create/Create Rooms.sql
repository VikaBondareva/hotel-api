USE [BowserHotel]
GO
CREATE TABLE Rooms(
	roomId int NOT NULL PRIMARY KEY,
	floor int NOT NULL,
	countRooms int NOT NULL CHECK(countRooms >0),
	countDoubleBeds int NOT NULL CHECK(countDoubleBeds >=0),
	countSingleBeds int NOT NULL  CHECK(countSingleBeds >=0),
	totalBeds int NOT NULL CHECK(totalBeds >0),
	toilets int NOT NULL CHECK(toilets >=0),
	price float NOT NULL CHECK(price >=0),
	status nvarchar(10) NOT NULL DEFAULT 'work',
	CONSTRAINT UC_Room UNIQUE (roomId, floor)
) 


