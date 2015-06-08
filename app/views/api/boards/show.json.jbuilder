# write some jbuilder to return some json about a board
# it should include the board
#  - its lists
#    - the cards for each list

# Needed to explicitly call extract in order to keep the data
json.extract! @board, :id, :user_id, :title, :created_at, :updated_at
json.lists @board.lists do |list|
  json.extract! list, :id, :board_id, :title, :ord, :created_at, :updated_at
  json.cards list.cards
end
