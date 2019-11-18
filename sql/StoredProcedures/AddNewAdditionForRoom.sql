CREATE PROCEDURE InsertAdditionForRoom
	@roomId int,
	@additionId int,
	@status nvarchar(10) = 'work'
AS
BEGIN
	INSERT INTO AdditionsRooms(roomId, additionId, status)
	 VALUES (@roomId, @additionId, @status)
END
GO
