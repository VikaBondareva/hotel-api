USE [BowserHotel]
GO

create VIEW [dbo].[RoomsImagesAdditionsView]
AS
SELECT        dbo.Rooms.roomId, dbo.Rooms.countRooms, dbo.Rooms.countDoubleBeds, dbo.Rooms.countSingleBeds, dbo.Rooms.toilets, dbo.Rooms.price, dbo.Rooms.status, dbo.Images.url, dbo.Images.isMain, dbo.Additions.name, 
                         dbo.Additions.price AS priceService
FROM            dbo.Rooms LEFT JOIN
                         dbo.Images ON dbo.Rooms.roomId = dbo.Images.roomId CROSS JOIN
                         dbo.Additions
GO


