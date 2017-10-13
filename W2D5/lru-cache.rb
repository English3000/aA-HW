class List
  attr_reader :tail, :head

  def initialize(head_value = nil, tail_value = nil)
    @tail = nil
    add(head_value)
    @head = @tail
    add(tail_value)
    @head.next = @tail
  end

  def add(el)
    new_item = LinkedItem.new(el, self) #can a linked list have repeats? #googling implies yes
    unless @tail == nil
      @tail.next = new_item
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
    @prev = list.tail
    @next = nil
  end

  def delete
    if self == @list.tail
      self.prev.next = nil
    elsif self == @list.head
      self.next.prev = nil
    else
      self.prev.next = self.next
      self.next.prev = self.prev
    end
  end
end

class LRUCache
  def initialize(capacity)
    @cache = {}
    @capacity = capacity
    @list = List.new
  end

  def count
    @cache.size
  end

  #linked list for faster insertion/deletion
  # create List class w/ auto. @head & @tail, double-linked
  # create LinkedItem class w/ @prev, @next, & @value
  # when #add(item), @tail.next is set to item & item.prev is set to tail
    # OR if item exists, item.prev.next = item.next; delete & append
    # if at capacity, delete head & set head.next.prev = nil
  #EXCEPT @add(el) could be O(n)... so need hash w/ linked list values
  # so @cache is #initialize'd as {}
  # #add(el) -> @cache[el] = LinkedItem.new(el)
  # LinkedItem#initialize sets @tail.next = el, el.prev = @tail,
    # @tail = el, el.next = nil
    # @tail refers to an element so #next & #prev modify the element
    # thus, then setting @tail = el leaves the element intact
      # b/c @tail is a var. of the List set to a LinkedItem
  # to add, if @cache[el]; @cache.delete(el); @cache << el
    # when a LinkedItem is deleted, its #prev is set as its #next's (& vice-versa)
    # this would probably occur via a LinkedItem#delete method, so:
      # if @cache[el]; @cache.delete(el.delete); @cache << el  #deletes both key & value
  # elsif count >= @capacity; @cache.delete(@cache.first.delete); @cache << el
  # else; @cache << el; end
  def add(el)
    if @cache[el]
      @cache[el].delete
      @cache.delete(el)
      @cache[el] = @list.add(el) #LinkedItem
    elsif count >= @capacity
      head_el = @list.head
      @list.head.delete
      @cache.delete(head_el.value)
      @cache[el] = @list.add(el)
    else
      @cache[el] = @list.add(el)
    end
  end

  def show
    p @cache
    nil
  end
end

if __FILE__ == $PROGRAM_NAME #don't know why this prints so much
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
