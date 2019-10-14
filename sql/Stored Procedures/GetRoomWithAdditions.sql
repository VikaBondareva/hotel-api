CREATE PROCEDURE SelectRoomWithAdditions
	@roomId int
AS
BEGIN
	SELECT Additions.name, IIF(Additions.price = 0.0, 'Free', CONVERT(nvarchar,Additions.price, 10)) as price 
	FROM Rooms
		LEFT JOIN AdditionsRooms ON AdditionsRooms.roomId = Rooms.roomId
		LEFT JOIN Additions ON Additions.additionId = AdditionsRooms.additionId
	WHERE Rooms.roomId = @roomId
END
GO
