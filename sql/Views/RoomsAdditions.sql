USE [BowserHotel]
GO

create VIEW [dbo].[RoomsAdditions]
AS
SELECT Rooms.roomId, Rooms.price as priceRoom, AdditionsRooms.additionId, Additions.name, Additions.price AS price
FROM   Rooms INNER JOIN
     AdditionsRooms ON Rooms.roomId = AdditionsRooms.roomId INNER JOIN
      Additions ON AdditionsRooms.additionId = Additions.additionId
	  WHERE AdditionsRooms.status = 'work'
GO


