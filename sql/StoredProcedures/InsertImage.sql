CREATE PROCEDURE InsertImageForRoom
	@roomId int,
	@name nvarchar(100),
	@url nvarchar(max),
	@isMain bit = 0
AS
BEGIN
	INSERT INTO Images VALUES (@roomId, @name, @url, @isMain)
END
GO
