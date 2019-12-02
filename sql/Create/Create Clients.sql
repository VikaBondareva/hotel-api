USE [BowserHotel]
GO
CREATE TABLE Clients (
	clientId int NOT NULL PRIMARY KEY IDENTITY,
	name nvarchar(20) NOT NULL,
	surname nvarchar(20) NOT NULL,
	phoneNumber nvarchar(15) NOT NULL,
	email nvarchar(50) NOT NULL UNIQUE,
	phoneCountryId int NOT NULL,
	status nvarchar(15) NOT NULL,
	gender nvarchar(10) NOT NULL,
	CONSTRAINT FK__Clients__To__Countries FOREIGN KEY (phoneCountryId) REFERENCES Countires (countryId)
)


