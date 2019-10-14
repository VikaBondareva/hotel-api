USE [BowserHotel]
GO
CREATE TABLE [dbo].[Images](
    [imageId] [int] NOT NULL PRIMARY KEY IDENTITY,
	[roomId] [int] NOT NULL,
	[name] [nvarchar](50) NOT NULL,
	[url] [nvarchar](max) NOT NULL,
	[isMain] [bit] NOT NULL DEFAULT 0,
	CONSTRAINT FK_Images_To_Rooms FOREIGN KEY (roomId)  REFERENCES Rooms (roomId) ON DELETE CASCADE
)


