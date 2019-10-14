USE [BowserHotel]
GO

CREATE TABLE [dbo].[Empoyees](
	[employeeId] [int] NOT NULL PRIMARY KEY IDENTITY,
	[name] [nvarchar](20) NOT NULL,
	[surname] [nvarchar](20) NOT NULL,
	[phoneNumber] [nvarchar](20) NOT NULL,
	[email] [nvarchar](30) NOT NULL,
	[status] [nvarchar](20) NOT NULL DEFAULT 'notVerified',
	[password] [nvarchar](max) NOT NULL,
	[positionId] [int] NOT NULL,
	[permisions] [int] NOT NULL,
	UNIQUE (phoneNumber, email),
   CONSTRAINT FK_Empoyees_To_Possitions FOREIGN KEY (positionId)  REFERENCES Positions (positionId)
)


