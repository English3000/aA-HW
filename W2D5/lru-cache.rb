require 'byebug'

class List
  attr_accessor :tail, :head

  def initialize(head_value = nil, tail_value = nil)
    @head = nil
    @tail = nil
    add(head_value)
    @head = @tail #switches @head to wrong @tail
    add(tail_value)
    @head.next = @tail
  end

  def add(el)
    new_item = LinkedItem.new(el, self) #can a linked list have repeats? #googling implies yes
    unless @tail == nil
      @tail.next = new_item
    end

    if @tail.prev == @head # head doesn't exist yet
      @head = @tail
    end

    @tail = new_item
  end
end

class LinkedItem
  attr_accessor :prev, :next
  attr_reader :value

  def initialize(value, list)
    @value = value
    @list = list
    @prev = @list.tail
    @next = nil
  end

  def delete
    if self == @list.tail
      self.prev.next = nil
      @list.tail = self.prev
    elsif self == @list.head
      self.next.prev = nil
      @list.head = self.next
    else
      self.prev.next = self.next
      self.next.prev = self.prev
    end
  end
end

class LRUCache #-will debug further during study hall
  attr_reader :capacity #for testing--why it isn't being enforced?

  def initialize(capacity)
    @cache = {}
    @capacity = capacity
    @list = List.new
  end

  def count
    @cache.keys.size
  end

  def add(el)
    debugger
    if @cache[el]
      @cache[el].delete
      @cache.delete(el)
      @cache[el] = @list.add(el) #LinkedItem
    elsif count >= @capacity
      head_el = @list.head
      @cache.delete(head_el.value) #head.value == nil... why?
      @list.head.delete
      @cache[el] = @list.add(el)
    else
      @cache[el] = @list.add(el)
    end
  end

  def show
    p @cache.keys
    nil
  end
end

if __FILE__ == $PROGRAM_NAME
  johnny_cache = LRUCache.new(4)

  johnny_cache.add("I walk the line")
  johnny_cache.add(5)

  p johnny_cache.count # => returns 2

  johnny_cache.add([1,2,3])
  johnny_cache.add(5)
  johnny_cache.add(-5)
  johnny_cache.add({a: 1, b: 2, c: 3})
  johnny_cache.add([1,2,3,4])
  johnny_cache.add("I walk the line")
  johnny_cache.add(:ring_of_fire)
  johnny_cache.add("I walk the line")
  johnny_cache.add({a: 1, b: 2, c: 3})

  johnny_cache.show
end
