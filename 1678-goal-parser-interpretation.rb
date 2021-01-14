def interpret(command)
    return command.gsub("()","o").gsub("(al)","al")
end
