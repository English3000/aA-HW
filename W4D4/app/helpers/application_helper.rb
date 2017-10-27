module ApplicationHelper
  def auth_token
    "<input type='hidden'
            name='authenticity_token'
            value='#{form_authenticity_token}'
    />".html_safe
  end

  def footer_content
    # <% content_for :footer do %>
      "<p>This is the #{self} page.</p>".html_safe
    # <% end %>
  end
end
