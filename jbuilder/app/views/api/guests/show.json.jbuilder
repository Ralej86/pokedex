json.partial! 'api/guests/partial', guest: @guest  

json.gifts do
  json.array! @guest.gifts  
end 