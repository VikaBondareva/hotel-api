CREATE TABLE [dbo].[Reviews](
	[reviewId] [int] NOT NULL PRIMARY KEY IDENTITY,
	[clientId] [int] NOT NULL,
	[reviewText] [nvarchar](max) NOT NULL,
	[assessment] [int] NOT NULL,
	[createDate] [datetime] NOT NULL DEFAULT CONVERT (datetime, GETDATE()),
	CONSTRAINT FK_Reviews_To_Clients FOREIGN KEY (clientId)  REFERENCES Clients (clientId)
)


