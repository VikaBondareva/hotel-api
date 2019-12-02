
CREATE PROCEDURE InsertClient
	@name nvarchar(20), @surname nvarchar(20),
	@phoneNumber nvarchar(20), @email nvarchar(20) ,
	@phoneCountryId int , @gender nvarchar(10)
AS
BEGIN
	INSERT Clients 
		VALUES (@name, @surname, @phoneNumber, @email, @phoneCountryId, 'notVerified', @gender)
END
GO
