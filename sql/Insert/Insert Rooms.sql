USE [BowserHotel]
GO
INSERT INTO Rooms (roomId ,floor ,countRooms ,countDoubleBeds,countSingleBeds,totalBeds,toilets ,price,status)
VALUES
     (100, 2, 2, 1, 2, 3, 1, 25, 'work'),

     (101, 2, 3, 2, 2, 4, 2, 50, 'work'),

     (120, 2, 1, 0, 2, 2, 1, 20, 'work'),

     (205, 3, 2, 2, 0, 2, 1, 43, 'work'),

     (203, 3, 3, 1, 3, 4, 2, 50, 'repair'),

     (506, 6, 2, 1, 1, 2, 1, 50, 'work'),

     (215, 3, 1, 0, 2, 2, 1, 32, 'work'),

     (301, 4, 2, 1, 2, 4, 1, 40, 'repair'),

     (110, 2, 2, 1, 2, 3, 1, 25, 'work'),

     (116, 2, 3, 2, 2, 4, 2, 50, 'work'),

     (208, 3, 1, 0, 2, 2, 1, 20, 'work'),

     (308, 4, 2, 2, 0, 2, 1, 43, 'work'),

     (401, 5, 3, 1, 3, 4, 2, 50, 'repair'),

     (402, 5, 2, 1, 1, 2, 1, 50, 'work'),

     (403, 5, 1, 0, 2, 2, 1, 32, 'work'),

     (404, 5, 2, 1, 2, 4, 1, 40, 'repair'),

     (115, 2, 2, 1, 2, 3, 1, 25, 'work'),

     (117, 2, 3, 2, 2, 4, 2, 50, 'work'),

     (118, 2, 1, 0, 2, 2, 1, 20, 'work'),

     (119, 2, 2, 2, 0, 2, 1, 43, 'work'),

     (210, 3, 3, 2, 2, 4, 2, 80, 'work'),

     (211, 3, 1, 1, 0, 1, 1, 36, 'work'),

     (212, 3, 1, 1, 0, 1, 1, 40, 'repair'),


     (102, 2, 1, 0, 2, 2, 1, 32, 'repair'),

     (103, 2, 1, 0, 2, 2, 1, 35, 'work'),

     (104, 2, 2, 1, 1, 2, 1, 38, 'work'),

     (106, 2, 1, 1, 0, 1, 1, 40, 'work'),

     (107, 2, 1, 1, 0, 1, 1, 50, 'work'),

     (108, 2, 2, 1, 2, 3, 1, 58, 'work'),

     (204, 3, 2, 0, 4, 4, 1, 60, 'repair'),

     (209, 3, 2, 2, 0, 2, 1, 65, 'work'),

     (213, 3, 3, 1, 4, 5, 2, 75, 'work'),

     (216, 3, 1, 0, 2, 2, 1, 28, 'work'),

     (217, 3, 1, 1, 0, 1, 1, 29, 'work'),

     (218, 3, 3, 1, 3, 4, 2, 80, 'repair'),

     (219, 3, 1, 0, 2, 2, 1, 35, 'work'),

     (220, 3, 2, 2, 0, 2, 2, 76, 'work'),

     (302, 4, 1, 0, 2, 2, 1, 35, 'repair'),

     (303, 4, 1, 0, 2, 2, 1, 25, 'work'),

     (304, 4, 3, 2, 3, 5, 2, 90, 'work'),

     (306, 4, 1, 0, 2, 2, 1, 28, 'work'),

     (309, 4, 1, 1, 0, 1, 1, 43, 'work'),

     (310, 4, 2, 1, 1, 3, 1, 43, 'repair'),

     (311, 4, 2, 0, 4, 4, 1, 80, 'work'),

     (312, 4, 1, 1, 0, 1, 1, 36, 'work'),

     (313, 4, 1, 0, 2, 1, 1, 40, 'repair'),


     (315, 4, 3, 1, 2, 3, 1, 55, 'work'),

     (317, 4, 3, 2, 2, 4, 2, 60, 'work'),

     (319, 4, 1, 1, 0, 1, 1, 40, 'repair'),

     (321, 4, 1, 1, 0, 1, 1, 50, 'work'),

     (405, 5, 2, 1, 2, 3, 1, 58, 'repair'),

     (407, 5, 2, 0, 4, 4, 1, 60, 'work'),

     (409, 5, 1, 0, 3, 3, 1, 45, 'work'),

     (411, 5, 2, 1, 3, 4, 2, 70, 'work'),

     (412, 5, 1, 0, 2, 2, 1, 28, 'work'),

     (414, 5, 1, 1, 0, 1, 1, 29, 'work'),

     (416, 5, 3, 1, 3, 4, 2, 80, 'work'),

     (418, 5, 1, 0, 2, 2, 1, 35, 'work'),

     (420, 5, 2, 2, 0, 2, 2, 76, 'work'),

     (502, 6, 1, 0, 2, 2, 1, 35, 'repair'),

     (503, 6, 1, 0, 2, 2, 1, 25, 'work'),

     (505, 6, 3, 2, 3, 5, 2, 90, 'work'),

     (507, 6, 1, 0, 2, 2, 1, 28, 'work'),

     (509, 6, 1, 1, 0, 1, 1, 43, 'work'),

     (512, 6, 2, 1, 1, 3, 1, 43, 'work'),

     (513, 6, 2, 0, 4, 4, 1, 80, 'work'),

     (514, 6, 1, 1, 0, 1, 1, 36, 'work'),

     (515, 6, 1, 0, 2, 1, 1, 40, 'work')