module ApplicationHelper
  def auth_token
    "<input type='hidden'
            name='authenticity_token'
            value='#{form_authenticity_token}'
    />".html_safe
  end

  def footer_content
    #  wouldn't need :footer block if implement as helper
    # <% content_for :footer do %>
      debugger
      "<p>This is the #{self} page.</p>".html_safe #would implement via JS
    # <% end %>
  end
end
