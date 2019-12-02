USE [BowserHotel]
GO
CREATE TABLE [dbo].[Services](
	[serviceId] [int] IDENTITY(1,1) PRIMARY KEY NOT NULL,
	[numberOfRoom] [int] NULL,
	[floor] [int]  NULL,
	[name] [nvarchar](50) NOT NULL UNIQUE,
	[type] [nvarchar](20) NOT NULL,
	[status] [nvarchar](20) NOT NULL DEFAULT 'work',
	[maxPerson] [int]  NULL,
	[site] [nvarchar](max) NULL,
	[price] [money] NOT NULL CHECK(price >= 0.0)
)