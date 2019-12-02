USE [BowserHotel]
GO 
CREATE TABLE AdditionsRooms (
	additionId int NOT NULL,
	roomId int NOT NULL,
	status nvarchar(10) NOT NULL DEFAULT 'work',
	UNIQUE (additionId, roomId),
	PRIMARY KEY (additionId, roomId),
	CONSTRAINT FK_AdditionsRooms_To_Additions FOREIGN KEY (additionId)  REFERENCES Additions (additionId) ON DELETE CASCADE,
	CONSTRAINT FK_AdditionsRooms_To_Rooms FOREIGN KEY (roomId)  REFERENCES Rooms (roomId)  ON DELETE CASCADE,
)



