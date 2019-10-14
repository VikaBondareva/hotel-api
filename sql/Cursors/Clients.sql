

declare Clients__cursor cursor GLOBAL SCROLL  KEYSET  for
	select (name+' '+surname) as fullname ,('+'+cast(phoneCountryId as nvarchar(5))+cast(phoneNumber as nvarchar(15))) as phone,email, status
	from Clients
go

open Clients__cursor
go

declare @fullname nvarchar(50),
@status nvarchar(10),
@phone nvarchar(20),
@email nvarchar(50)

fetch next from Clients__cursor into @fullname,@phone,@email,@status
while @@FETCH_STATUS=0
	begin
		select @fullname,@phone,@email,@status
		fetch next from Clients__cursor into @fullname,@phone,@email,@status
	end
close Clients__cursor
DEALLOCATE Clients__cursor