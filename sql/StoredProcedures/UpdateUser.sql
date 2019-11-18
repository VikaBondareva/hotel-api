CREATE PROCEDURE UpdateClient
	@clientId int, @name nvarchar(20), @surname nvarchar(20),
	@phoneNumber nvarchar(20),  @email nvarchar(30), @phoneCountryId int,
	@status nvarchar(10), @gender nvarchar(10)
AS
BEGIN
	DECLARE @isChangePhone bit, @isChangeEmail bit;
	SET @isChangePhone = IIF((SELECT phoneNumber FROM Clients) = @phoneNumber, 0, 1);
	SET @isChangeEmail =  IIF((SELECT email FROM Clients) = @email, 0, 1);

	IF @isChangeEmail = 1 OR @isChangePhone = 1
	 BEGIN 
		UPDATE Clients
		 SET name = @name, surname = @surname, 
			newPhone =  IIF(@isChangePhone = 1, @phoneNumber, null), 
			newEmail = IIF(@isChangeEmail = 1, @email, null), 
			status =  'needVerified',
			gender = @gender
		 WHERE clientId = @clientId
     END
	ELSE 
	 BEGIN
		UPDATE Clients
		 SET name = @name, surname = @surname, 
			phoneNumber = @phoneNumber, 
			email = @email,
			newEmail =  null,
			newPhone = null,
			status = @status,
			gender = @gender
		 WHERE clientId = @clientId
	 END


	
END
GO
