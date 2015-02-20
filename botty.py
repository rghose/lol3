mport aiml

k = aiml.Kernel()
k.verbose(True)
k.learn("custom-startup.xml")
k.respond("load aiml b")

def botty_get_response(text):
  return k.respond(text)

