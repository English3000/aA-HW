class Stack

  def initialize
    @stack = []
  end

  def add(el)
    @stack << el
  end

  def remove
    @stack.pop
  end

  def show
    @stack
  end

end


class Queue

  def initialize
    @queue = []
  end

  def enqueue(el)
    @queue.push(el)
  end

  def dequeue
    @queue.shift
  end

  def show
    @queue
  end

end


class Map

  def initialize
    @map = []
  end

  def assign(key, value)
    pair_idx = lookup(key)
    if pair_idx
      @map[pair_idx][-1] = value
    else
      @map << [key, value]
    end
  end

  def lookup(key)
    @map.each_with_index do |pair, pair_idx|
      return pair_idx if pair.first == key
    end
    nil
  end

  def remove(key)
    pair_idx = lookup(key)
    if pair_idx
      @map.delete_at(pair_idx)
    else
      puts "This key does not exist."
    end
  end

  def show
    @map
  end

end
