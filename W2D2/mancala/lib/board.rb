class Board
  attr_accessor :cups

  def initialize(name1, name2)
    @name1 = name1
    @name2 = name2
    @cups = Array.new(14){ Array.new(4){:stone} }
    cups[6], cups[13] = [], []
  end

  # def place_stones
  #   # helper method to #initialize every non-store cup with four stones each
  # end

  def valid_move?(start_pos)
    raise Exception, "Invalid starting cup" unless start_pos.between?(0, 12) &&
      !(cups[start_pos].empty?)
  end

  def make_move(start_pos, current_player_name)
    stones, cups[start_pos] = cups[start_pos], []
    until stones.empty?
      start_pos += 1
      start_pos = 0 if start_pos == 14
      cups[start_pos] << stones.shift unless start_pos == 13 && current_player_name == @name1 ||
        start_pos == 6 && current_player_name == @name2
    end

    render
    next_turn(start_pos)
  end

  def next_turn(ending_cup_idx)
    if ending_cup_idx == 13 || ending_cup_idx == 6
      :prompt
    elsif cups[ending_cup_idx].size <= 1
      :switch
    else
      ending_cup_idx
    end
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    (0..5).all?{|i| cups[i].empty?} ||
      (7..12).all?{|i| cups[i].empty?}
  end

  def winner
    if cups[6] == cups[13]
      :draw
    elsif cups[6].size > cups[13].size
      @name1
    else
      @name2
    end
  end
end
