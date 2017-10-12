def quadratic_search(array)
  biggest = ""
  array.each do |el|
    biggest = el if el.length > biggest.length
    array.each do |el2|
      biggest = el2 if el2.length > el.length
    end
  end
  biggest
end

class Array
  def log_linear_search(&prc)
    prc ||= Proc.new {|x, y| x <=> y}
    return self.dup if size < 2

    midpt = self.dup.size/2

    left = self.dup.take(midpt).merge_sort(&prc)
    right = self.drop(midpt).merge_sort(&prc)

    Array.merge(left, right, &prc)
  end

  private
  def self.merge(left, right, &prc)
    merged = []

    until left.empty? || right.empty?
      case prc.call(left.first, right.first)
      when -1
        merged << left.shift
      when 0
        merged << left.shift
      when 1
        merged << right.shift
      end
    end

    merged + left + right
  end
end

def linear_search(array)
  biggest = ""
  array.each do |el|
    biggest = el if el.length > biggest.length
  end
  biggest
end

def linear_dance(step, array)
  array.each_with_index do |el, idx|
    return idx if el == step
  end
end

tiles_hash = {
    "up" => 0,
    "right-up" => 1,
    "right"=> 2,
    "right-down" => 3,
    "down" => 4,
    "left-down" => 5,
    "left" => 6,
    "left-up" => 7
}
def constant_dance(step, tiles_hash)
  tiles_hash[step]
end
